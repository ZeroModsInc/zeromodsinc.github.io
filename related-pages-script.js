const g_RelatedPagesData = {
	"pages": [
		{
			"link": "https://luxploit.net/",
			"display": "luxploit.net"
		},
		{
			"link": "https://gitlab.com/xifil/cod-all/",
			"display": "xifil/cod-all 😉"
		},
		{
			"link": "https://gitlab.com/xifil/t6-mod/",
			"display": "xifil/t6-mod (Call of Duty®: Black Ops II)"
		}
	]
}

function InitialiseRelatedPagesData() {
	const relatedPagesSection = document.getElementById("related-pages-content");

	for (var x = 0; x < g_RelatedPagesData.pages.length; x++) {
		const page = g_RelatedPagesData.pages[x];

		const badge = document.createElement("div");
		badge.className = "related-page-badge";
		{
			const iconElem = document.createElement("img");
			iconElem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtZU9TsNAEIXfmEjQIJkSicIU9EnFT4NzAjhCIkqQCCeIfQISCUqEjwANLaEBUiU9BbkBKSiAIsuMd5MAdjYmcT5pvWvv+r390wzBgoLvAl81bu3zq2eK0OfSBQY3AN0SnnuTNChdeMfjrmtu+siEivgRphk5SfFdnjF1sosLVJF/FLZriZ7f4nsBP+uYC+KVPAYJAz1znCMXBmeEdmNkYPZctsVFPvAlUCU5E3MGTj1HcWit+JKAzOxfsRCW13gF6gAL4+OUDZxDzIK7CtxfcrmwDCJfzqCImcRZ2C/p9mQ8MXCninnrSfHiFgeLF6B8bDUoYBqdSNflE75870lx+WZBVtCzjoju9ApE+J/iTL9gDLyJQ8IrXQdHus4uzqjuUoANT07bOu6ho2vZ/8zisUGDdMz/fMNCUJsOoSXJo4XcUdGPWKSq0FkqL0QrlEZsYDJRiNwYBMPsNspohCeO3yrA3CgWbzfHun+7deKZJXz39czH4qkG2kRCuOQIVUEmVIsf1bSkT9bfYiMJ58QRlyQoDlfV4+9c5PatNM1NTOUbKLKJZvmMWigAAAAASUVORK5CYII=";

			const hrefElem = document.createElement("a");
			hrefElem.href = page.link;
			hrefElem.textContent = page.display;

			badge.appendChild(iconElem);
			badge.appendChild(hrefElem);
		}

		relatedPagesSection.appendChild(badge);
	}
}
