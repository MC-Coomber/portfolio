import { SchemaTypeDefinition } from "sanity";
import { profileType } from "./profile";
import { projectType } from "./project";
import { toolType } from "./tool";


const schemas: SchemaTypeDefinition[] = [profileType, toolType, projectType]

export default schemas