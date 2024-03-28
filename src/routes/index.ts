import { server } from "../server"

import { authenticationRoute } from "./canvas/authentication"
import { loadLTIRoute } from "./canvas/loadLTI"
import { userInfoRoute } from "./canvas/userInfo"

export async function routes() {
  server.register(authenticationRoute)
  server.register(loadLTIRoute)
  server.register(userInfoRoute)
}
