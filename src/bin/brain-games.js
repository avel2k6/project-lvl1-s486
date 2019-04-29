#!/usr/bin/env node
import * as main from '..';

main.welcome();
const userName = main.askName();
main.hello(userName);
