import * as angular from "angular";

import usersTableTemplate from "./users-table/users-table.html";
import { UsersTableComponent } from "./users-table/users-table.component";

export const name = "kl.juniors.fullstack.users.components";
angular
    .module(name, [])
    .component("kljUsersTable", {
        template: usersTableTemplate,
        controller: UsersTableComponent
    });