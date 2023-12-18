import $ from "jquery";

class TournamentInfoWidget {
  private iconType: string;
  private title: string;
  private description: string;

  constructor(iconType: string, title: string, description: string) {
    this.iconType = iconType;
    this.title = title;
    this.description = description;
  }

  render() {
    return $("<div>")
      .addClass("current-tournament-information__info-widget info-widget")
      .append(
        $("<svg>")
          .addClass(`info-widget__icon icon-${this.iconType}`)
          .append(
            $("<use>").attr(
              "xlink:href",
              `src/images/sprite.svg#${this.iconType}`
            )
          ),
        $("<p>").addClass("info-widget__title").text(this.title),
        $("<p>").addClass("info-widget__description").text(this.description)
      );
  }
}

class TournamentInfoWidgetsContainer {
  private widgets: TournamentInfoWidget[];
  private containerClass: string;

  constructor(containerClass: string) {
    this.widgets = [];
    this.containerClass = containerClass;
  }

  addWidget(widget: TournamentInfoWidget) {
    this.widgets.push(widget);
  }

  render() {
    const container = $(`.${this.containerClass}`).empty();
    this.widgets.forEach((widget) => {
      container.append(widget.render());
    });
  }
}

$(document).ready(function () {
  const tournamentWidgets = new TournamentInfoWidgetsContainer(
    "current-tournament-information__widgets"
  );

  tournamentWidgets.addWidget(
    new TournamentInfoWidget("cup", "2 000 000 $", "Призовой фонд")
  );
  tournamentWidgets.addWidget(
    new TournamentInfoWidget("calendar", "23 Окт - 7 Ноя", "Даты проведения")
  );
  tournamentWidgets.addWidget(
    new TournamentInfoWidget("registration", "До 15 Окт", "Регистрация")
  );
  tournamentWidgets.addWidget(
    new TournamentInfoWidget("people", "9/16", "Команд в игре")
  );

  tournamentWidgets.render();
});
