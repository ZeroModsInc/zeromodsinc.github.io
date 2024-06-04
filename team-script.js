// todo: https://discordlookup.mesalytic.moe/v1/user/[id]

const g_TeamData = {
	"users": [
		{
			"id": "180430713873498113",
			"name": "lifix",
			"avatar": "2b2f6f29338a91c3901a329b5f8e315c"
		},
		{
			"id": "389394868637794307",
			"name": "vipex1.0",
			"avatar": "dd520acd856b6554a4408d815a279356"
		},
		{
			"id": "789998562163294224",
			"name": "i.love.fent.anyl",
			"avatar": "0c598351e562f3d1b2fe1e78f9e4939d"
		},
		{
			"id": "773376091939012638",
			"name": "tuesibots",
			"avatar": "69717f7fe6316bd6629f7f6766451ded"
		},
		{
			"id": "930943843048751145",
			"name": "theinvert.",
			"avatar": "0aea946c9d7916a36ba36c01fc534541"
		},
		{
			"id": "1056203904280440884",
			"name": "aceadxm",
			"avatar": "fb7cd254d5ebf84d157e3840a7c85744"
		},
		{
			"id": "750696921605210192",
			"name": "luxploit.net",
			"avatar": "d374a03ecd4fb7fae8f215c9a255a501"
		},
		{
			"id": "777925101869989890",
			"name": "pbafk",
			"avatar": "c6d13b3cbd59d9def674bd30a4ed4523"
		},
		{
			"id": "1113927427937271889",
			"name": "cp.lover",
			"avatar": "aa36d73e72cb84d43d9116745c089a59"
		}
	]
};

function InitialiseTeamData() {
	const teamSection = document.getElementById("team");
	var currentRow = null;

	for (var x = 0; x < g_TeamData.users.length; x++) {
		const user = g_TeamData.users[x];
		const extension = user.avatar.startsWith("a_") ? "gif" : "png";

		const userUrl = `https://discord.com/users/${user.id}`;
		const displayName = `@${user.name}`;
		const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=4096`;

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
}
