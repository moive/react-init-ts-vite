export class MyError extends Error {
	status: number | string;
	statusText: string;
	constructor(
		message: string,
		status: string = "00",
		statusText: string = "A mistake ocurred"
	) {
		super(message);
		this.status = status;
		this.statusText = statusText;
	}
}
