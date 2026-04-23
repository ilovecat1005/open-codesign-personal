import { Menu, app, dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import { mt } from './main-i18n';

export function registerAppMenu(): void {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      role: 'appMenu' as const,
    },
    {
      role: 'fileMenu' as const,
    },
    {
      role: 'editMenu' as const,
    },
    {
      role: 'viewMenu' as const,
    },
    {
      role: 'windowMenu' as const,
    },
    {
      label: mt('main.appMenu.help'),
      role: 'help' as const,
      submenu: [
        {
          label: mt('main.appMenu.checkForUpdates'),
          click: async () => {
            if (!app.isPackaged) {
              dialog.showMessageBox({
                type: 'info',
                title: mt('main.appMenu.updateCheckDisabledTitle'),
                message: mt('main.appMenu.updateCheckDisabledMessage'),
              });
              return;
            }
            try {
              const result = await autoUpdater.checkForUpdates();
              if (!result || !result.updateInfo) {
                dialog.showMessageBox({
                  type: 'info',
                  title: mt('main.appMenu.updateCheckTitle'),
                  message: mt('main.appMenu.updateCheckUnknownMessage'),
                });
                return;
              }
              if (result.updateInfo.version === app.getVersion()) {
                dialog.showMessageBox({
                  type: 'info',
                  title: mt('main.appMenu.upToDateTitle'),
                  message: mt('main.appMenu.upToDateMessage', { version: app.getVersion() }),
                });
              }
              // If a newer version is available, the update-available event fires
              // and the renderer banner handles it — no dialog needed here.
            } catch (err) {
              dialog.showErrorBox(
                mt('main.appMenu.updateCheckFailedTitle'),
                err instanceof Error ? err.message : String(err),
              );
            }
          },
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}
