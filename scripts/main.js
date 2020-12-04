Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.show();
	const table = Vars.ui.mods.cont.cells.get(1).get();

	table.cells.get(0).get().fireClick();
	Core.app.post(() => {
		Vars.ui.mods.hide();
		const dialog = Core.scene.dialog;
		const table = dialog.cont.cells.get(0).get();
		const gh = table.cells.get(1).get();

		// Force the use of the pc dialog which can be hijacked
		const mobile = Vars.mobile;
		Vars.mobile = false;
		gh.fireClick();
		dialog.hide();

		Core.app.post(() => {
			Core.app.post(() => {
				Core.app.post(() => {
					const dialog = Core.scene.dialog;
					dialog.cont.cells.get(1).get().text = "DeltaNedas/no";
					dialog.buttons.cells.get(1).get().fireClick();
					// hide ugly loading dialog
					Core.app.post(() => {
						ui.loadfrag.hide();
						Vars.mobile = mobile;
					});
				});
			});
		});
	});
});
