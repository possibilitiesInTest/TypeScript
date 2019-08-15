"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader';
// import { MatchResult } from "./MatchResult";
// import { ConsoleReport } from './reportTargets/ConsoleReports';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
var Summary_1 = require("./Summary");
// import { HtmlReport } from './reportTargets/HtmlReport';
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
// const csvFileReader = new CsvFileReader('football.csv')
// create an instance of Matchreader and pass in something satisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
