"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
// import { MatchResult } from "./MatchResult";
var ConsoleReports_1 = require("./reportTargets/ConsoleReports");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// inheritance implementation
// const reader = new MatchReader("football.csv");
// reader.read();
// interface implementation
// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// console.log(`Man United won ${manUnitedWins} games`);
// object composition implementation
// create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of Matchreader and pass in something satisfying
// the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalaysis('Man United'), new ConsoleReports_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
