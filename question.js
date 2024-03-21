function findAvailableChairs(needed, meetingRooms) {
    let chairsTaken = [];
    for (let room of meetingRooms) {
        const [occupants, totalChair] = room;
        const occupiedChairs = occupants.length;
        const availableChairs = totalChair - occupiedChairs;
        if (availableChairs > 0) {
            const chairsToTake = Math.min(needed, availableChairs);
            chairsTaken.push(chairsToTake);
            needed -= chairsToTake;
        } else {
            chairsTaken.push(0);
        }
        if (needed === 0)
            break;
    }
    return needed === 0 ? chairsTaken : 0;
}

const meetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const neededChairs = 4;

console.log(findAvailableChairs(neededChairs, meetingRooms));
