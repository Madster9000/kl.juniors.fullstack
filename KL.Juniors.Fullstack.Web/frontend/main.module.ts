import * as angular from "angular";

import * as usersComponentsModule from "./users/components/users.components.module";

// styles
import "bootstrap/less/bootstrap.less";

angular
    .module("kl.juniors.fullstack", [
        usersComponentsModule.name
    ]);