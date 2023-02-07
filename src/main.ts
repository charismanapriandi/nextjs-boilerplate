import 'reflect-metadata'
import { AppModule } from "domain/_app.module";
import { Factory } from '@core';

export default (function main() {
  return new Factory().create(AppModule)
}())
