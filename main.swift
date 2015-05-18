import AppKit

func getPath(app: String) -> String? {
	let workspace = NSWorkspace.sharedWorkspace()

	if app.rangeOfString(".") != nil {
		return workspace.absolutePathForAppBundleWithIdentifier(app)
	} else {
		return workspace.fullPathForApplication(app)
	}
}

if Process.arguments.count == 1 {
	exit(1)
}

let ret = getPath(Process.arguments[1])

if ret != nil {
	println(ret!)
} else {
	exit(2)
}
