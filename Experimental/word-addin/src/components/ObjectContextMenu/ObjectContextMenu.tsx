import * as React from "react";
import { inject, observer } from "mobx-react";

import {
	ITrimConnector,
	ICommandDef,
	ITrimMainObject,
	IEnumDetails,
} from "src/trim-coms/trim-connector";
import {
	IContextualMenuItem,
	ContextualMenuItemType,
} from "office-ui-fabric-react/lib/ContextualMenu";
import { CommandIds } from "../../trim-coms/trim-command-ids";

import { IOfficeConnector } from "../../office-coms/office-connector";
import BaseObjectTypes from "../../trim-coms/trim-baseobjecttypes";
import { CommandBar } from "office-ui-fabric-react";

interface IContextMenuProps {
	appStore?: any;
	trimConnector?: ITrimConnector;
	wordConnector?: IOfficeConnector;
	record: ITrimMainObject;
	isInList: boolean;
	onCommandComplete?: (commandKey: string) => void;
}

export class ObjectContextMenu extends React.Component<
	IContextMenuProps,
	{ menuMessage: string; commandDefs: ICommandDef[] }
> {
	constructor(props: IContextMenuProps) {
		super(props);

		if (!this.props.isInList) {
			this.state = {
				menuMessage: "",
				commandDefs: props.appStore!.documentInfo.CommandDefs,
			};
		} else {
			this.state = { menuMessage: "", commandDefs: [] };
		}
	}

	componentDidUpdate(prevProps: IContextMenuProps) {
		const { isInList, record } = this.props;
		if (isInList) {
			if (prevProps.record.Uri != record.Uri) {
				this.setState({ commandDefs: record.CommandDefs! });
			}
		}
	}

	private callCommandComplete(key: string): void {
		const { onCommandComplete } = this.props;

		if (onCommandComplete) {
			onCommandComplete(key);
		}
	}

	private _onActionClick = (
		evt: React.MouseEvent<HTMLElement>,
		item: IContextualMenuItem
	) => {
		const { trimConnector, wordConnector, appStore, record } = this.props;
		if (record.Uri < 1) {
			trimConnector!
				.getObjectCaption(BaseObjectTypes.Record)
				.then((caption) => {
					appStore.setErrorMessage(
						"bob_needSelectedRow",
						caption.toLowerCase()
					);
				});
		} else {
			if (item.key === "pasteLink") {
				const url = appStore.getWebClientUrl(record.Uri);
				wordConnector!.insertLink(record.NameString!, url);
				this.callCommandComplete(item.key);
			} else if (item.key === "pasteNumber") {
				wordConnector!.insertText(record.NameString!);
				this.callCommandComplete(item.key);
			} else if (item.key === "pasteTitle") {
				wordConnector!.insertText(record.ToolTip!);
				this.callCommandComplete(item.key);
			} else if (item.key === "Properties") {
				appStore.openInCM(record.Uri);
				this.callCommandComplete(item.key);
			} else if (item.key === "getGlobalProperties") {
				appStore.setStatus("STARTING");

				trimConnector!.getGlobalUserOptions("ViewPane").then((data) => {
					this.callCommandComplete(item.key);
					appStore.setStatus("WAITING");
				});
			} else if (item.data.NeedsAnObject) {
				appStore.setStatus("STARTING");
				const me = this;
				wordConnector!.saveDocument().then(() => {
					const runAction = (fileName: string) => {
						trimConnector!
							.runAction(
								item.key as CommandIds,
								record.Uri,
								fileName,
								appStore!.WebUrl
							)
							.then((data) => {
								me.setState({
									menuMessage: `Action completed successfully '${item.text}'.`,
									commandDefs: data.CommandDefs,
								});
								setTimeout(function() {
									me._dismissMessage();
								}, 3000);
								this.callCommandComplete(item.key);
								appStore.setStatus("WAITING");
							});
					};

					if (item.key === CommandIds.RecCheckIn) {
						wordConnector!
							.getDocumentData((data: number[], fileName: string) => {
								return trimConnector!.writeFileSlice(data, fileName);
							})
							.then((fileName) => {
								runAction(fileName);
							});
					} else {
						runAction("");
					}
				});
			} else {
				this.callCommandComplete(item.key);
			}
		}
	};

	private _dismissMessage = () => {
		this.setState({ menuMessage: "" });
	};

	private _makeRelationshipMenu() {
		const { trimConnector, record, appStore } = this.props;

		return {
			key: "addRelationshipto",
			text: appStore.messages.web_Add_Relationship,
			title: appStore.messages.web_Add_RelationshipTitle,
			subMenuProps: {
				items: appStore.documentInfo.Enums.RecordRelationshipType.map(
					(rel: IEnumDetails) => {
						return {
							key: rel.Name,
							text: rel.Caption,
							onClick: () => {
								if (record.Uri < 1) {
									trimConnector!
										.getObjectCaption(BaseObjectTypes.Record)
										.then((caption) => {
											appStore.setErrorMessage(
												"bob_needSelectedRow",
												caption.toLowerCase()
											);
										});
								} else {
									appStore.setStatus("STARTING");
									trimConnector!
										.createRelationship(
											appStore.RecordUri,
											record.Uri,
											rel.Name
										)
										.then(() => {
											appStore.setStatus("WAITING");
										})
										.catch((error) => {
											appStore.setError(error);
										});
								}
							},
						};
					}
				),
			},
		};
	}

	private isSaveCommand(key: string): boolean {
		return ["RecCheckIn", "RecDocFinal"].includes(key);
	}

	private getFarItems = () => {
		const { appStore, isInList, record } = this.props;
		const { commandDefs } = this.state;

		let checkinDisabled = false;
		let checkinLabel = "";

		if (!record) {
			return [];
		}

		const menuItems = (commandDefs || [])
			.filter((commandDef: ICommandDef) => {
				if (!isInList) {
					if (appStore.isEmail() && commandDef.CommandId === "RecCheckIn") {
						return false;
					}
					return true;
				}

				return !this.isSaveCommand(commandDef.CommandId);
			})
			.map<IContextualMenuItem>((commandDef: ICommandDef) => {
				if (commandDef.CommandId === "RecCheckIn") {
					checkinDisabled = !commandDef.IsEnabled;
					checkinLabel = commandDef.Tooltip;
				}
				return {
					key: commandDef.CommandId,
					text:
						commandDef.CommandId === "Properties"
							? appStore.messages.web_GoToCM
							: commandDef.Tooltip,
					onClick: this._onActionClick,
					disabled: !commandDef.IsEnabled,
					data: commandDef,
				};
			});

		if (record.TrimType === BaseObjectTypes.Record) {
			menuItems.unshift(
				{
					key: "paste",
					text: appStore.messages.web_Paste,
					subMenuProps: {
						items: [
							{
								key: "pasteTitle",
								text: appStore.messages.web_Paste_Title,
								onClick: this._onActionClick,
							},
							{
								key: "pasteNumber",
								text: appStore.messages.web_Paste_Number,
								onClick: this._onActionClick,
							},
							{
								key: "pasteLink",
								text: appStore.messages.web_Paste_Link,
								onClick: this._onActionClick,
							},
						],
					},
				},
				{ key: "divider_1", itemType: ContextualMenuItemType.Divider }
			);
		}

		if (isInList) {
			if (record.TrimType === BaseObjectTypes.Record) {
				menuItems.push(this._makeRelationshipMenu());
			}
		} else {
			const checkinItem = menuItems.find((mi) => mi.key === "RecCheckIn");

			const msgText = record.DeleteNow
				? "Disable check in and delete on close"
				: "Enable check in and delete on close";
			if (checkinItem) {
				let checkinDelete = { ...checkinItem };
				checkinDelete.key = "RecCheckInDelete";
				checkinDelete.text = msgText;
				menuItems.splice(menuItems.indexOf(checkinItem) + 1, 0, checkinDelete);
			}

			menuItems.push({
				key: "getGlobalProperties",
				text: appStore.messages.web_Get_Global_View_Pane,
				onClick: this._onActionClick,
			});
		}

		const items = [];

		if (!isInList && !appStore.isEmail()) {
			items.push({
				iconProps: { iconName: "Save" },
				key: "RecCheckIn",
				name: checkinLabel,
				iconOnly: true,
				disabled: checkinDisabled,
				onClick: this._onActionClick,
			});

			items.push({
				iconProps: {
					iconName: record.DeleteNow ? "OpenFile" : "FileBug",
				},
				key: "RecCheckInDelete",
				name: record.DeleteNow
					? "Disable check in and delete on close"
					: "Enable check in and delete on close",
				iconOnly: true,
				disabled: checkinDisabled,
				onClick: this._onActionClick,
			});
		}
		items.push({
			key: "moreActions",
			name: appStore!.messages.web_Menu,
			iconOnly: true,
			subMenuProps: { items: menuItems },
		});

		return items;
	};

	public render() {
		return <CommandBar items={[]} farItems={this.getFarItems()} />;
	}
}

export default inject(
	"appStore",
	"trimConnector",
	"wordConnector"
)(observer(ObjectContextMenu));