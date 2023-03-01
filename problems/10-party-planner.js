// Your code here
class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList
	}

	addToGuestList(name) {
		this.guestList.push(name)
		return this.guestList
	}

	throwParty() {
		if (this.guestList.length === 0) {
			return "Gotta add people to the guest list"
		} else {
			return this.guestList.reduce((welcomeMessage, guest, i) => {
				if (i === 0) return welcomeMessage += guest
				return welcomeMessage += ' and ' + guest
			}, 'Welcome to the party ')
		}
	}

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}