import { server } from "../server"

import { authenticationRoute } from "./canvas/authentication"
import { loadLTIRoute } from "./canvas/loadLTI"
import { userInfoRoute } from "./canvas/userInfo"
import { courseInfoRoute } from "./canvas/courseInfo"
import { loadScriptTutor } from "./canvas/loadScriptTutor"
import { loadStyleTutor } from "./canvas/loadStyleTutor"

export async function routes() {
  server.register(authenticationRoute)
  // server.register(userInfoRoute)
  // server.register(courseInfoRoute)
  server.register(loadLTIRoute)
  server.register(loadScriptTutor)
  server.register(loadStyleTutor)
}
