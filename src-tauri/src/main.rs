#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

fn main() {
  println!("executed main");

  tauri_plugin_deep_link::prepare("tk.hugulosao");

  tauri::Builder::default()
    .setup(move |app| {
      let handle = app.handle();
      tauri_plugin_deep_link::register(
        "hugulosao",
        move |request| {
          dbg!(&request);
          if let Some(w) = handle.get_window("main") {
            w.show().ok();
            w.maximize().ok();
            w.set_focus().ok();
            w.emit("show", "").ok();
          }

          println!("registered forgot password emit all");
          handle.emit_all("forgot-password", request).unwrap();
        },
      ).unwrap();

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

}
