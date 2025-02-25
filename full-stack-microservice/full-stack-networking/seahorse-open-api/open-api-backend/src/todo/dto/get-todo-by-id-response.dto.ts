import { ApiProperty } from "@nestjs/swagger";

export class GetTodoByIdResponse {
	@ApiProperty()
	_id: string;

	@ApiProperty()
	name: string;

	constructor(_id: string, name: string) {
		this._id = _id;
		this.name = name;
	}
}