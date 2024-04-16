import { server } from "../server"

import { authenticationRoute } from "./canvas/authentication"
import { loadLTIRoute } from "./canvas/loadLTI"
import { userInfoRoute } from "./canvas/userInfo"
import { courseInfoRoute } from "./canvas/courseInfo"

export async function routes() {
  server.register(authenticationRoute)
  server.register(loadLTIRoute)
  // server.register(userInfoRoute)
  // server.register(courseInfoRoute)
}
