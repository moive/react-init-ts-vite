import FormSurvey from "../components/Survey/FormSurvey";

const Survey = () => {
	return (
		<>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Survey
			</h2>
			<section className="max-w-screen-sm mx-auto px-4">
				<FormSurvey />
			</section>
		</>
	);
};

export default Survey;
