async function apiGetData(dataName) {
	return await (await fetch (`api/${dataName}.json`)).json();
}