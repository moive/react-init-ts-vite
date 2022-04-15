import FormSurvey from "../components/Survey/FormSurvey";
import { TypeSurvey } from "../utils/TypeSurvey";

const Survey = () => {
	const frameworks: TypeSurvey[] = [
		{ name: "Vanillat", value: "vanilla" },
		{ name: "Vue", value: "vue" },
		{ name: "React", value: "react" },
		{ name: "Angular", value: "angular" },
		{ name: "Svelte", value: "svelte" },
	];

	const languages: TypeSurvey[] = [
		{ name: "JavaScript", value: "js" },
		{ name: "Go", value: "go" },
		{ name: "NodeJs", value: "nodejs" },
		{ name: "Php", value: "php" },
		{ name: "C#", value: "csharp" },
	];

	return (
		<>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Survey
			</h2>
			<section className="max-w-screen-md mx-auto p-4 shadow bg-white rounded-md">
				<FormSurvey languages={languages} frameworks={frameworks} />
			</section>
		</>
	);
};

export default Survey;
