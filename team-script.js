const g_TeamData = {
	"users": [
		"180430713873498113",	// lifix
		"750696921605210192",	// aki
		"543803682190262272",	// cyxap
		"1274403974690246727",	// vipex
		"924759076041293886"	// invert
	]
};

async function InitialiseTeamData() {
	const teamSection = document.getElementById("team");
	var currentRow = null;

	for (var x = 0; x < g_TeamData.users.length; x++) {
		const userId = `${g_TeamData.users[x]}`;

		const response = await fetch(`https://discordlookup.mesalytic.moe/v1/user/${userId}`);
		const userData = await response.json();

		const userUrl = `https://discord.com/users/${userId}`;
		var displayName = `@unknown`;
		var avatarUrl = `https://cdn.discordapp.com/embed/avatars/${(parseInt(g_TeamData.users[x]) >> 22) % 6}.png?size=4096`; // this needs to be fixed but does it matter that much?

		if (userData == null || userData == undefined) {
			continue;
		}

		if (userData.hasOwnProperty("code") && userData.code == 10013 /* Unknown User */) {
			console.log(`Couldn't find user \`${userId}\`.`);
		} else {
			displayName = `@${userData.hasOwnProperty("username") ? userData.username : "<unknown>"}`;
			if (userData != null && userData.hasOwnProperty("avatar") && userData.avatar != null && userData.avatar.hasOwnProperty("id") && userData.avatar.id != null) {
				avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${userData.avatar.id}.${userData.avatar.is_animated ? "gif" : "png"}?size=4096`;
			}
		}

		if (currentRow == null) {
			currentRow = document.createElement("div");
			currentRow.style.display = "inline-flex";
			currentRow.style.justifyContent = "center";
			currentRow.style.width = "100%";
			currentRow.style.paddingBottom = "10px";
		}

		const container = document.createElement("div");
		container.className = "team-profile-picture-container";
		{
			const imageElem = document.createElement("img");
			imageElem.className = "team-profile-picture";
			imageElem.src = avatarUrl;

			const nameElem = document.createElement("a");
			nameElem.className = "team-profile-name";
			nameElem.href = userUrl;
			nameElem.innerHTML = displayName;

			container.appendChild(imageElem);
			container.appendChild(nameElem);
		}

		currentRow.appendChild(container);

		if ((x + 1) % 5 == 0) {
			teamSection.appendChild(currentRow);
			currentRow = null;
		}
	}
	
	if (currentRow != null) {
		teamSection.appendChild(currentRow);
	}

	const loadingTextElem = document.getElementById("team-loading-text");
	if (loadingTextElem != null) {
		loadingTextElem.remove();
	}
}
