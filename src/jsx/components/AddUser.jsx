import React from "react";
import { ReactDOM } from "react";


export default function AddUser() {

    return (
        <div>
            <div id="adminSection">
                <div>
                    <div>
                        <input type="name" name="name" placeholder="name" aria-required="true" />
                    </div>
                </div>
                <div>
                    <div>
                        <input type="email" name="email" placeholder="email" aria-required="true" />
                    </div>
                </div>
                <div>
                    <div>
                        <input type="password" name="password" placeholder="password" aria-required="true" />
                    </div>
                </div>
                <div>
                    <div>
                        <select name="adminLevel" class="adminLevelSelect">
                            <option>Select Permission Level</option>
                            <option value="1">Basic</option>
                            <option value="2">Basic Admin</option>
                            <option value="3">Advanced Admin</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <button type="submit" name="addUserForm">Add User</button>
                    </div>
                </div>
            </div>
        </div>

    )
}