import { IsCardinal } from "../decorators";

export class IdDto {
  @IsCardinal()
  readonly id: number;
}
