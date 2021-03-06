import TestGroupController from './TestGroupController.js'

export default class TestRunnerController {

  constructor() {
    this.siteUrl = ''
    this.results = document.querySelector('#results')
    this.testGroups = [
      'seo',
      'performance',
      'security',
      'appearance'
    ]
    this.testGroupControllers = {} 
  }

  clearResults() {
    this.siteUrl = ''
    for (const index in this.testGroupControllers) {
      this.testGroupControllers[index].clearResults()
    }
  }

  runTests(siteUrl) {
    for (const testGroup of this.testGroups) {
      if (!this.testGroupControllers[testGroup]) {
        this.testGroupControllers[testGroup] = new TestGroupController(testGroup)
      }
      this.testGroupControllers[testGroup].runTests(siteUrl)
    }
  }
}