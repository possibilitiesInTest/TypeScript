import { MatchReader } from "./MatchReader";
import { CsvFileReader } from './CsvFileReader';
// import { MatchResult } from "./MatchResult";
import { ConsoleReport } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

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
const csvFileReader = new CsvFileReader('football.csv')
// create an instance of Matchreader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);