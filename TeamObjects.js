class TeamObjects {
    constructor() {

        this.team1Slots = [];
        this.team2Slots = [];
        this.allTeamSlots = [this.team1Slots, this.team2Slots];

        this.swapBuffer = [];

        this.team1OriginPosition = [
            {x:23, y:19, area: "area1"},
            {x:24, y:19, area: "area1"},
            {x:25, y:19, area: "area1"},
            {x:26, y:19, area: "area1"},
            {x:27, y:19, area: "area1"},
            {x:28, y:19, area: "area1"},
        ];
        this.team2OriginPosition = [
            {x:5, y:2, area: "area1"},
            {x:6, y:2, area: "area1"},
            {x:7, y:2, area: "area1"},
            {x:8, y:2, area: "area1"},
            {x:9, y:2, area: "area1"},
            {x:10, y:2, area: "area1"},
        ];

    }

    swapTeams() {
        this.swapBuffer = this.team1Slots;
        this.team1Slots = this.team2Slots;
        this.team2Slots = this.swapBuffer;
    }
}


module.exports = {
    TeamObjects,
}