Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.show();
	const table = Vars.ui.mods.cont.cells.get(1).get();

	table.cells.get(0).get().fireClick();
	Core.app.post(() => {
		Vars.ui.mods.hide();
		const dialog = Core.scene.dialog;
		print("Dialog " + dialog)
		const table = dialog.cont.cells.get(0).get();
		const gh = table.cells.get(1).get();
		print("Gh " + gh)
		gh.fireClick();
		dialog.hide();
		Core.app.post(() => {
			if (Vars.mobile) {
				// TODO: somehow hijack the input listener
			} else {
				// hijack the input dialog
				Core.app.post(() => {
					Core.app.post(() => {
						const dialog = Core.scene.dialog;
						print("Dialog " + dialog)
						dialog.cont.cells.get(1).get().text = "DeltaNedas/no";
						dialog.buttons.cells.get(0).get().fireClick();
					});
				});
			}
		});
	});
});
