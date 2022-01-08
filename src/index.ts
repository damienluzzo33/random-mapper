/// <reference types="@types/google.maps" />

//* bring in the classes we are using
import { User } from "./User";
import { Company } from "./Company";
import { NewMap } from "./NewMap";

//* create instances of all of our classes
const newUser = new User();
const newCompany = new Company();
const newMap = new NewMap("map");

//* add markers to our map with our instances of User and Company
newMap.addMarker(newUser);
newMap.addMarker(newCompany);
