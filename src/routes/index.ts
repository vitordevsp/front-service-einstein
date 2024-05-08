import { server } from "../server"

import { authenticationRoute } from "./canvas/authentication"
import { userInfoRoute } from "./canvas/userInfo"
import { courseInfoRoute } from "./canvas/courseInfo"

import { tutorLoadLTIRoute } from "./tutor/loadLTI"
import { loadScriptTutor } from "./tutor/loadScriptTutor"
import { loadStyleTutor } from "./tutor/loadStyleTutor"

import { generatorLoadLTIRoute } from "./generator/loadLTI"

export async function routes() {
  // Rotas | Canvas
  server.register(authenticationRoute)
  // server.register(userInfoRoute)
  // server.register(courseInfoRoute)

  // Rotas | Tutor
  server.register(tutorLoadLTIRoute)
  server.register(loadScriptTutor)
  server.register(loadStyleTutor)

  // Rotas | Generator
  server.register(generatorLoadLTIRoute)
}
