﻿using Framework;
using HP.HPTRIM.SDK;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace StreamSearch
{
	class Program
	{

		private static void TestStreamSearch(Database database)
		{

			TrimMainObjectSearch search = new TrimMainObjectSearch(database, BaseObjectTypes.Record);
			search.SetSearchString("recElectronic");

			TrimSearchDataStream searchStream = search.GetDataStream(new PropertyOrFieldDefList() {
				new PropertyOrFieldDef(PropertyIds.RecordOwnerLocation, database),
				new PropertyOrFieldDef(new FieldDefinition(database, "Speed")),
				new PropertyOrFieldDef(PropertyIds.RecordTitle, database)
			});

			while (searchStream.MoveNext())
			{
				var searchItem = searchStream.Current();
				Console.WriteLine(searchItem.GetAsJSONString());
			}

		}

		private static string getField(FieldDefinition fieldDef, Record record)
		{
			try
			{
				return record.GetFieldValueAsString(fieldDef, StringDisplayType.Default, false);
			}
			catch
			{
				return string.Empty;
			}
		}

		private static void TestSearch(Database database)
		{

			TrimMainObjectSearch search = new TrimMainObjectSearch(database, BaseObjectTypes.Record);
			search.SetSearchString("recElectronic");

			FieldDefinition speadField = new FieldDefinition(database, "Speed");

			foreach (Record record in search)
			{
				Console.WriteLine($"Uri: {record.Uri}, Title: {record.Title}, Owner: {record.OwnerLocation.NameString}, Speed: {getField(speadField, record)}");
			}

		}


		private static void doTest()
		{
			using (Database database = new Database())
			{
				database.Id = ConfigurationManager.AppSettings["dbid"];
				database.WorkgroupServerName = "local";
				if (database.IsValid)
				{
					Stopwatch stopwatch = Stopwatch.StartNew();

					TestStreamSearch(database);

				//	TestSearch(database);

					stopwatch.Stop();
					Console.WriteLine(stopwatch.ElapsedMilliseconds);
				}
			}
		}

		static void Main(string[] args)
		{
			SDKLoader.load();
			doTest();


		}
	}
}
