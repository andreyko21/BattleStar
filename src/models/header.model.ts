import Backbone from 'backbone';

interface HeaderModelAttributes {
  title: string;
  subtitle: string;
}

class HeaderModel extends Backbone.Model<HeaderModelAttributes> {
  defaults() {
    return {
      title: 'Заголовок',
      subtitle: 'Підзаголовок або опис'
    };
  }
}

export default HeaderModel;