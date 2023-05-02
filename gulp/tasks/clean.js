import { srcFolder } from "../config/path.js";

export function clean () {
    return app.plugins.del(app.path.clean)
}