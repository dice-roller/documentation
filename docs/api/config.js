exports.fileTree = [{
  'name': 'ComparePoint',
  'path': '/ComparePoint',
  'fullPath': './docs/api/ComparePoint'
}, {'name': 'DiceRoll', 'path': '/DiceRoll', 'fullPath': './docs/api/DiceRoll'}, {
  'name': 'DiceRoller',
  'path': '/DiceRoller',
  'fullPath': './docs/api/DiceRoller'
}, {'name': 'RollGroup', 'path': '/RollGroup', 'fullPath': './docs/api/RollGroup'}, {
  'name': 'dice',
  'children': [{'name': 'FudgeDice', 'path': '/FudgeDice', 'fullPath': 'dice/FudgeDice'}, {
    'name': 'PercentileDice',
    'path': '/PercentileDice',
    'fullPath': 'dice/PercentileDice'
  }, {'name': 'StandardDice', 'path': '/StandardDice', 'fullPath': 'dice/StandardDice'}]
}, {
  'name': 'exceptions',
  'children': [{
    'name': 'CompareOperatorError',
    'path': '/CompareOperatorError',
    'fullPath': 'exceptions/CompareOperatorError'
  }, {
    'name': 'DataFormatError',
    'path': '/DataFormatError',
    'fullPath': 'exceptions/DataFormatError'
  }, {
    'name': 'DieActionValueError',
    'path': '/DieActionValueError',
    'fullPath': 'exceptions/DieActionValueError'
  }, {
    'name': 'NotationError',
    'path': '/NotationError',
    'fullPath': 'exceptions/NotationError'
  }, {
    'name': 'RequiredArgumentError',
    'path': '/RequiredArgumentError',
    'fullPath': 'exceptions/RequiredArgumentError'
  }]
}, {
  'name': 'modifiers',
  'children': [{
    'name': 'ComparisonModifier',
    'path': '/ComparisonModifier',
    'fullPath': 'modifiers/ComparisonModifier'
  }, {
    'name': 'CriticalFailureModifier',
    'path': '/CriticalFailureModifier',
    'fullPath': 'modifiers/CriticalFailureModifier'
  }, {
    'name': 'CriticalSuccessModifier',
    'path': '/CriticalSuccessModifier',
    'fullPath': 'modifiers/CriticalSuccessModifier'
  }, {
    'name': 'DropModifier',
    'path': '/DropModifier',
    'fullPath': 'modifiers/DropModifier'
  }, {
    'name': 'ExplodeModifier',
    'path': '/ExplodeModifier',
    'fullPath': 'modifiers/ExplodeModifier'
  }, {'name': 'KeepModifier', 'path': '/KeepModifier', 'fullPath': 'modifiers/KeepModifier'}, {
    'name': 'MaxModifier',
    'path': '/MaxModifier',
    'fullPath': 'modifiers/MaxModifier'
  }, {'name': 'MinModifier', 'path': '/MinModifier', 'fullPath': 'modifiers/MinModifier'}, {
    'name': 'Modifier',
    'path': '/Modifier',
    'fullPath': 'modifiers/Modifier'
  }, {
    'name': 'ReRollModifier',
    'path': '/ReRollModifier',
    'fullPath': 'modifiers/ReRollModifier'
  }, {
    'name': 'SortingModifier',
    'path': '/SortingModifier',
    'fullPath': 'modifiers/SortingModifier'
  }, {
    'name': 'TargetModifier',
    'path': '/TargetModifier',
    'fullPath': 'modifiers/TargetModifier'
  }, {'name': 'modifier-flags', 'path': '/modifier-flags', 'fullPath': 'modifiers/modifier-flags'}]
}, {
  'name': 'parser',
  'children': [{'name': 'Parser', 'path': '/Parser', 'fullPath': 'parser/Parser'}, {'name': 'grammars', 'children': []}]
}, {
  'name': 'results',
  'children': [{
    'name': 'ResultGroup',
    'path': '/ResultGroup',
    'fullPath': 'results/ResultGroup'
  }, {'name': 'RollResult', 'path': '/RollResult', 'fullPath': 'results/RollResult'}, {
    'name': 'RollResults',
    'path': '/RollResults',
    'fullPath': 'results/RollResults'
  }]
}, {
  'name': 'utilities',
  'children': [{
    'name': 'ExportFormats',
    'path': '/ExportFormats',
    'fullPath': 'utilities/ExportFormats'
  }, {'name': 'NumberGenerator', 'path': '/NumberGenerator', 'fullPath': 'utilities/NumberGenerator'}, {
    'name': 'math',
    'path': '/math',
    'fullPath': 'utilities/math'
  }, {'name': 'utils', 'path': '/utils', 'fullPath': 'utilities/utils'}]
}];
exports.sidebarTree = (title = 'Mainpage') => ({
  '/api/': [{
    'text': 'API',
    'collapsable': false,
    'children': [{link: '/api/', text: '' + title + ''}, '/api/ComparePoint.md', '/api/DiceRoll', '/api/DiceRoller', '/api/RollGroup']
  }, {
    'text': 'dice',
    'collapsable': false,
    'children': ['/api/dice/FudgeDice', '/api/dice/PercentileDice', '/api/dice/StandardDice']
  }, {
    'text': 'exceptions',
    'collapsable': false,
    'children': ['/api/exceptions/CompareOperatorError', '/api/exceptions/DataFormatError', '/api/exceptions/DieActionValueError', '/api/exceptions/NotationError', '/api/exceptions/RequiredArgumentError']
  }, {
    'text': 'modifiers',
    'collapsable': false,
    'children': ['/api/modifiers/ComparisonModifier', '/api/modifiers/CriticalFailureModifier', '/api/modifiers/CriticalSuccessModifier', '/api/modifiers/DropModifier', '/api/modifiers/ExplodeModifier', '/api/modifiers/KeepModifier', '/api/modifiers/MaxModifier', '/api/modifiers/MinModifier', '/api/modifiers/Modifier', '/api/modifiers/ReRollModifier', '/api/modifiers/SortingModifier', '/api/modifiers/TargetModifier', '/api/modifiers/modifier-flags']
  }, {'text': 'parser', 'collapsable': false, 'children': ['/api/parser/Parser']}, {
    'text': 'results',
    'collapsable': false,
    'children': ['/api/results/ResultGroup', '/api/results/RollResult', '/api/results/RollResults']
  }, {
    'text': 'utilities',
    'collapsable': false,
    'children': ['/api/utilities/ExportFormats', '/api/utilities/NumberGenerator', '/api/utilities/math', '/api/utilities/utils']
  }]
});
