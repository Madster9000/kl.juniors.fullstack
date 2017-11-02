import * as angular from "angular";

import * as usersComponentsModule from "./users/components/users.components.module";

angular
    .module("kl.juniors.fullstack", [
        usersComponentsModule.name
    ]);