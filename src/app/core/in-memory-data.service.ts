import { HtmlColors } from './../../constants/html-colors'

export class InMemoryDataService {

  createDb() {
    const colors = HtmlColors
    return { colors }
  }

}
