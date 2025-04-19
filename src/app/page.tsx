import React from 'react'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Progress} from "@/components/ui/progress";
import {Textarea} from "@/components/ui/textarea";

const Page = () => {
	return (
		<main className={" p-10 flex flex-col gap-7"}>
			<Button variant={"elevated"} >
				Hello
			</Button>
			<Input placeholder={"Enter"}/>
			<Checkbox />
			<Progress value={50}/>
			<Textarea placeholder={"Enter"}/>
		</main>
	)
}
export default Page

