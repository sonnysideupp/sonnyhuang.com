
import { ResumeExperience } from "../types"


export const experiences: ResumeExperience[] = [

	{positionTitle: "Full-stack Software Engineer", 
	companyName: "Hall of Fame Bets", 
	companyURL: "https://hofbets.com/",
	startDate: "March 2023",
	endDate: "Present",
	highlights: [
	"Developed the current React Native iOS app with 4.9 stars, 100k users, and over 6 figures in ARR",
	"Designed database models and implemented Rest API in Django to handle data requests",
	"Created frontend components, Typescript data models, and custom hooks to deliver a seamless user experience",
	"Tech Stack: React Native, Typescript, Expo, Django, Postgres, Auth0, BranchIO"
	]
	},
	{positionTitle: "Co-founder/CTO", 
	companyName: "FanZone", 
	companyURL: "",
	startDate: "March 2021",
	endDate: "March 2023",
	highlights: [
		"Designed, architectured, and developed the iOS and web application using SwiftUI and NextJS",
		"Created NodeJS serverless functions in Google Cloud to handle Stripe's webhooks and payment APIs",
		"Reduced video bandwidth consumption by 80% by caching videos to FileManager using URLSessionTask", 
		"Implemented one to many live-broadcasting with real-time chat using Agora RTC server and Firebase websocket",
		"Bootstrapped to $20k annual gross revenue and on-boarded over 100 collegiate/pro athletes", 
		"Tech Stack: SwiftUI, React, NextJS, MUI, TailwindCSS, Firebase, NodeJS, Stripe, Twilio, Meilisearch, Agora"]
	},
	{positionTitle: "iOS Engineer", 
	companyName: "Yoke Gaming", 
	companyURL: "",
	startDate: "August 2020",
	endDate: "March 2021",
	highlights: [
		"Developed a SwiftUI/Firebase application that had over 60k users and was ranked 13th in the app store",
		"Responsible for frontend development, backend structural enhancement, and code deployment", 
		"Implemented features using Core Data, Firebase SDK, Twilio SDK, SnapKit, Algolia, and BrachIO."
	]
	},
	{positionTitle: "Alpha Researcher Intern", 
	companyName: "Trexquant", 
	companyURL: "https://trexquant.com/",
	startDate: "November 2019",
	endDate: "March 2020",
	highlights: [
		"Conducted a news sentiment analysis using the TRNA dataset in Jupyter Notebook", 
		"Performed OLS regressions using the daily sentiment score in addition to the Fama-French factors as regressors on equity returns for big-cap companies",
		"Concluded that the daily sentiment score is statistically significant at a 5% level in determining same-day return", 
		"Built a machine learning Lasso regression model that uses daily sentiment scores to predict next-day equity return"
	]
	}



]