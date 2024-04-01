import {getColorById, node_position_dict, tooltip, tooltip_left} from './main.js'
var nodes_full = [
    {
        "caption": "Privacy and security issues due to face recognition",
        "id": 11704,
        "label": "AI ethics issues",
        "TrueLabel": "AI_ethics_issues_148",
        "showCaption": "148",
        "visible": true,
        "index": 0,
        "x": 190.54767806818742,
        "y": 162.261813927634,
        "vy": 0.0008914183941630425,
        "vx": 0.011920823819473009
    },
    {
        "caption": "Time attributes of AI ethical issues",
        "id": 11705,
        "label": "Time attributes of AI ethical issues",
        "TrueLabel": "Time_attributes_of_AI_ethical_issues_148",
        "showCaption": "Time attributes of AI ethical issues",
        "visible": true,
        "index": 1,
        "x": 87.57650171434872,
        "y": 114.46828498170738,
        "vy": -0.005203617263580294,
        "vx": 0.011553126744301308
    },
    {
        "caption": "Life cycle of Al technology or product",
        "id": 11706,
        "label": "Life cycle of Al technology or product",
        "TrueLabel": "Life_cycle_of_Al_technology_or_product_148",
        "showCaption": "Life cycle of Al technology or product",
        "visible": true,
        "index": 2,
        "x": -16.094409294680307,
        "y": 65.02949602023698,
        "vy": 0.07127754150365667,
        "vx": 0.022719867307344595
    },
    {
        "caption": "Design session of Al",
        "id": 11707,
        "label": "Design session of Al",
        "TrueLabel": "Design_session_of_Al_148",
        "showCaption": "Design session of Al",
        "visible": true,
        "index": 3,
        "x": -95.74899757269645,
        "y": 54.36448006409582,
        "vy": 0.04289519535671044,
        "vx": -0.01814241960580743
    },
    {
        "caption": "AI Designers",
        "id": 11708,
        "label": "AI Designers",
        "TrueLabel": "AI_Designers_148",
        "showCaption": "AI Designers",
        "visible": true,
        "index": 4,
        "x": -145.15475526896716,
        "y": 75.19297467931483,
        "vy": -0.010439536752913958,
        "vx": 0.006778289046841235
    },
    {
        "caption": "ethics Issues Caused by Al Designers",
        "id": 11709,
        "label": "ethics Issues Caused by Al Designers",
        "TrueLabel": "ethics_Issues_Caused_by_Al_Designers_148",
        "showCaption": "ethics Issues Caused by Al Designers",
        "visible": true,
        "index": 5,
        "x": -191.05939678414512,
        "y": 92.68306784457856,
        "vy": 0.014847656704753949,
        "vx": -0.003571104789603161
    },
    {
        "caption": "Positive design that produces negative results that do not meet expectations",
        "id": 11710,
        "label": "Positive design that produces negative results that do not meet expectations",
        "TrueLabel": "Positive_design_that_produces_negative_results_that_do_not_meet_expectations_148",
        "showCaption": "Positive design that produces negative results that do not meet expectations",
        "visible": true,
        "index": 6,
        "x": -224.95779152360677,
        "y": 104.75830556691156,
        "vy": -0.024825170544037923,
        "vx": -0.002095299498394021
    },
    {
        "caption": "Negative design that produces negative results that meet expectations",
        "id": 11711,
        "label": "Negative design that produces negative results that meet expectations",
        "TrueLabel": "Negative_design_that_produces_negative_results_that_meet_expectations_148",
        "showCaption": "Negative design that produces negative results that meet expectations",
        "visible": true,
        "index": 7,
        "x": 180.81036281822043,
        "y": 58.1271659797378,
        "vy": 0.01144190116237031,
        "vx": -0.010723896550945959
    },
    {
        "caption": "AI Products",
        "id": 11712,
        "label": "AI Products",
        "TrueLabel": "AI_Products_148",
        "showCaption": "AI Products",
        "visible": false,
        "index": 8,
        "x": -9.249116032122433,
        "y": 505.6994487017536,
        "vy": 0.09711130167372296,
        "vx": -0.023869028896848776
    },
    {
        "caption": "ethics issues caused by Al products",
        "id": 11713,
        "label": "ethics issues caused by Al products",
        "TrueLabel": "ethics_issues_caused_by_Al_products_148",
        "showCaption": "ethics issues caused by Al products",
        "visible": false,
        "index": 9,
        "x": 32.81103234540326,
        "y": 445.84739951376224,
        "vy": 0.07805616120545107,
        "vx": -0.0429205390141442
    },
    {
        "caption": "Human-like ethics issues",
        "id": 11714,
        "label": "Human-like ethics issues",
        "TrueLabel": "Human-like_ethics_issues_148",
        "showCaption": "Human-like ethics issues",
        "visible": false,
        "index": 10,
        "x": 117.43389728698314,
        "y": 402.72587585503396,
        "vy": 0.04652522899488872,
        "vx": 0.04095831376331828
    },
    {
        "caption": "Overly human-like and leading to ethics problems",
        "id": 11715,
        "label": "Overly human-like and leading to ethics problems",
        "TrueLabel": "Overly_human-like_and_leading_to_ethics_problems_148",
        "showCaption": "Overly human-like and leading to ethics problems",
        "visible": false,
        "index": 11,
        "x": -17.760393710648284,
        "y": 417.32663233524573,
        "vy": 0.032741997664432296,
        "vx": -0.025620190363689958
    },
    {
        "caption": "Not human-like enough to cause ethics problems",
        "id": 11716,
        "label": "Not human-like enough to cause ethics problems",
        "TrueLabel": "Not_human-like_enough_to_cause_ethics_problems_148",
        "showCaption": "Not human-like enough to cause ethics problems",
        "visible": false,
        "index": 12,
        "x": 84.40121590561306,
        "y": 267.44147267494526,
        "vy": 0.018274329206542903,
        "vx": -0.013145291007337403
    },
    {
        "caption": "Non-human-like ethics issues",
        "id": 11717,
        "label": "Non-human-like ethics issues",
        "TrueLabel": "Non-human-like_ethics_issues_148",
        "showCaption": "Non-human-like ethics issues",
        "visible": false,
        "index": 13,
        "x": 314.7966454549271,
        "y": 366.46643116654974,
        "vy": 0.037212400187626615,
        "vx": -0.005304731658017647
    },
    {
        "caption": "Not enough beyond human to cause ethics problems",
        "id": 11718,
        "label": "Not enough beyond human to cause ethics problems",
        "TrueLabel": "Not_enough_beyond_human_to_cause_ethics_problems_148",
        "showCaption": "Not enough beyond human to cause ethics problems",
        "visible": false,
        "index": 14,
        "x": 356.7582915784677,
        "y": 405.5260882790245,
        "vy": -0.018929330637481794,
        "vx": -0.012306625666025446
    },
    {
        "caption": "AI's service & work sessions",
        "id": 11719,
        "label": "AI's service & work sessions",
        "TrueLabel": "AI's_service_&_work_sessions_148",
        "showCaption": "AI's service & work sessions",
        "visible": false,
        "index": 15,
        "x": -83.81336078546495,
        "y": 455.6342036411473,
        "vy": 0.022446149012643076,
        "vx": 0.02030749648691182
    },
    {
        "caption": "Users",
        "id": 11720,
        "label": "Users",
        "TrueLabel": "Users_148",
        "showCaption": "Users",
        "visible": false,
        "index": 16,
        "x": -158.8658459272133,
        "y": 505.32906593074193,
        "vy": -0.004013093050753365,
        "vx": 0.0032338506833864927
    },
    {
        "caption": "ethics issues caused by Al users",
        "id": 11721,
        "label": "ethics issues caused by Al users",
        "TrueLabel": "ethics_issues_caused_by_Al_users_148",
        "showCaption": "ethics issues caused by Al users",
        "visible": false,
        "index": 17,
        "x": -218.75455360386067,
        "y": 463.041264591883,
        "vy": 0.012115720231613144,
        "vx": -0.008766012874225447
    },
    {
        "caption": "ethics issues caused by the wrong user group",
        "id": 11722,
        "label": "ethics issues caused by the wrong user group",
        "TrueLabel": "ethics_issues_caused_by_the_wrong_user_group_148",
        "showCaption": "ethics issues caused by the wrong user group",
        "visible": false,
        "index": 18,
        "x": -272.47497372501965,
        "y": 432.27498523453187,
        "vy": 0.03384437139163701,
        "vx": -0.021226678804060393
    },
    {
        "caption": "ethics issues due to wrong user tasks",
        "id": 11723,
        "label": "ethics issues due to wrong user tasks",
        "TrueLabel": "ethics_issues_due_to_wrong_user_tasks_148",
        "showCaption": "ethics issues due to wrong user tasks",
        "visible": false,
        "index": 19,
        "x": -274.81811530444054,
        "y": 489.32836609147336,
        "vy": 0.035967676575101054,
        "vx": 0.0027593666235581713
    },
    {
        "caption": "AI ethics issue resolution measures",
        "id": 11724,
        "label": "AI ethics issue resolution measures",
        "TrueLabel": "AI_ethics_issue_resolution_measures_148",
        "showCaption": "AI ethics issue resolution measures",
        "visible": false,
        "index": 20,
        "x": 788.3935653459849,
        "y": 167.81026797089544,
        "vy": 0.004659740570583655,
        "vx": 0.01404016221332323
    },
    {
        "caption": "AI ethics governance guidelines",
        "id": 11725,
        "label": "AI ethics governance guidelines",
        "TrueLabel": "AI_ethics_governance_guidelines_148",
        "showCaption": "AI ethics governance guidelines",
        "visible": false,
        "index": 21,
        "x": 1027.345042008109,
        "y": 211.51105874024879,
        "vy": 0.0011678815498288094,
        "vx": 0.018699801600408433
    },
    {
        "caption": "Transparency",
        "id": 11726,
        "label": "Transparency",
        "TrueLabel": "Transparency_148",
        "showCaption": "Transparency",
        "visible": false,
        "index": 22,
        "x": 983.9157014259283,
        "y": 319.819276197568,
        "vy": 0.0012055112563733332,
        "vx": 0.019731806200507955
    },
    {
        "caption": "Justice and fairness",
        "id": 11727,
        "label": "Justice and fairness",
        "TrueLabel": "Justice_and_fairness_148",
        "showCaption": "Justice and fairness",
        "visible": false,
        "index": 23,
        "x": 1025.0672378871736,
        "y": 94.84688088476841,
        "vy": 0.0019114045032280818,
        "vx": 0.015570225898774985
    },
    {
        "caption": "High",
        "id": 11728,
        "label": "degree of influence",
        "TrueLabel": "degree_of_influence_148",
        "showCaption": "degree of influence",
        "visible": false,
        "index": 24,
        "x": 1116.1899445518777,
        "y": 135.92070884710657,
        "vy": -0.00033066370086855045,
        "vx": 0.01774265241736797
    },
    {
        "caption": "Privacy",
        "id": 11729,
        "label": "Privacy",
        "TrueLabel": "Privacy_148",
        "showCaption": "Privacy",
        "visible": false,
        "index": 25,
        "x": 916.0312743171154,
        "y": 246.4266231943913,
        "vy": 0.001419517908451745,
        "vx": 0.018562719935816065
    },
    {
        "caption": "Trust",
        "id": 11730,
        "label": "Trust",
        "TrueLabel": "Trust_148",
        "showCaption": "Trust",
        "visible": false,
        "index": 26,
        "x": 1083.673671017073,
        "y": 313.66288928271706,
        "vy": 0.0004935087545917184,
        "vx": 0.020941463967883715
    },
    {
        "caption": "Non-maleficence",
        "id": 11731,
        "label": "Non-maleficence",
        "TrueLabel": "Non-maleficence_148",
        "showCaption": "Non-maleficence",
        "visible": false,
        "index": 27,
        "x": 1142.0773371290752,
        "y": 232.49016121266342,
        "vy": -0.0003456823850884867,
        "vx": 0.019775126822843027
    },
    {
        "caption": "Responsibility",
        "id": 11732,
        "label": "Responsibility",
        "TrueLabel": "Responsibility_148",
        "showCaption": "Responsibility",
        "visible": false,
        "index": 28,
        "x": 935.5944701981399,
        "y": 139.45441052292765,
        "vy": 0.004416411650744676,
        "vx": 0.016214259832229287
    },
    {
        "caption": "AI-induced risks",
        "id": 11733,
        "label": "AI-induced risks",
        "TrueLabel": "AI-induced_risks_148",
        "showCaption": "AI-induced risks",
        "visible": false,
        "index": 29,
        "x": 663.9316437133832,
        "y": 475.0389331749596,
        "vy": 0.00688123781040904,
        "vx": 0.005842014886160607
    },
    {
        "caption": "Infringements on human rights",
        "id": 11734,
        "label": "Infringements on human rights",
        "TrueLabel": "Infringements_on_human_rights_148",
        "showCaption": "Infringements on human rights",
        "visible": false,
        "index": 30,
        "x": 565.3227848000437,
        "y": 609.4308796949396,
        "vy": 0.0029588754531718405,
        "vx": -0.00002211501815389122
    },
    {
        "caption": "Social detriment",
        "id": 11735,
        "label": "Social detriment",
        "TrueLabel": "Social_detriment_148",
        "showCaption": "Social detriment",
        "visible": false,
        "index": 31,
        "x": 741.560932094966,
        "y": 327.5953803821076,
        "vy": 0.007330211183024102,
        "vx": 0.01018721999403428
    },
    {
        "caption": "Emotional or psychological injury",
        "id": 11736,
        "label": "Emotional or psychological injury",
        "TrueLabel": "Emotional_or_psychological_injury_148",
        "showCaption": "Emotional or psychological injury",
        "visible": false,
        "index": 32,
        "x": 805.2725809065275,
        "y": 563.4611235412295,
        "vy": 0.010628618919120703,
        "vx": 0.0025469292357140597
    },
    {
        "caption": "Loss of opportunity",
        "id": 11737,
        "label": "Loss of opportunity",
        "TrueLabel": "Loss_of_opportunity_148",
        "showCaption": "Loss of opportunity",
        "visible": false,
        "index": 33,
        "x": 498.4025417697514,
        "y": 494.15471790905866,
        "vy": 0.0005436946582128829,
        "vx": 0.0034171002268736828
    },
    {
        "caption": "Physical injury",
        "id": 11738,
        "label": "Physical injury",
        "TrueLabel": "Physical_injury_148",
        "showCaption": "Physical injury",
        "visible": false,
        "index": 34,
        "x": 824.8882021023114,
        "y": 431.6229613744545,
        "vy": 0.01080148731243174,
        "vx": 0.00668731497261284
    },
    {
        "caption": "Economic loss",
        "id": 11739,
        "label": "Economic loss",
        "TrueLabel": "Economic_loss_148",
        "showCaption": "Economic loss",
        "visible": false,
        "index": 35,
        "x": 695.3038911659442,
        "y": 638.774090463045,
        "vy": 0.007408578468774959,
        "vx": -0.0002917144059113655
    },
    {
        "caption": "Cases of AI ethics issues",
        "id": 11740,
        "label": "Cases of AI ethics issues",
        "TrueLabel": "Cases_of_AI_ethics_issues_148",
        "showCaption": "Cases of AI ethics issues",
        "visible": false,
        "index": 36,
        "x": 83.28304464265197,
        "y": 142.4662290843639,
        "vy": 0.017903629352484327,
        "vx": -0.017159087015125096
    },
    {
        "caption": "Event attributes",
        "id": 11741,
        "label": "Event attributes",
        "TrueLabel": "Event_attributes_148",
        "showCaption": "Event attributes",
        "visible": false,
        "index": 37,
        "x": 261.7758919808754,
        "y": 553.0166242247062,
        "vy": 0.05555623548135099,
        "vx": -0.010351924692922848
    },
    {
        "caption": {
            "low": 148,
            "high": 0
        },
        "id": 11742,
        "label": "Index",
        "TrueLabel": "Index_148",
        "showCaption": "Index",
        "visible": false,
        "index": 38,
        "x": 292.2055203104881,
        "y": 665.6884475111783,
        "vy": 0.052049150558455076,
        "vx": -0.00142599092667557
    },
    {
        "caption": "France",
        "id": 11743,
        "label": "Place",
        "TrueLabel": "Place_148",
        "showCaption": "Place",
        "visible": false,
        "index": 39,
        "x": 366.06436963304515,
        "y": 500.8010607832967,
        "vy": 0.04553949031585477,
        "vx": -0.014343345019091966
    },
    {
        "caption": "05, 05, 2020",
        "id": 11744,
        "label": "Time",
        "TrueLabel": "Time_148",
        "showCaption": "Time",
        "visible": false,
        "index": 40,
        "x": 368.2423507806952,
        "y": 600.7773395954732,
        "vy": 0.04536521193186786,
        "vx": -0.006328113858847933
    },
    {
        "caption": "Relational attributes",
        "id": 11745,
        "label": "Relational attributes",
        "TrueLabel": "Relational_attributes_148",
        "showCaption": "Relational attributes",
        "visible": false,
        "index": 41,
        "x": -165.65707674325958,
        "y": 282.08780378968345,
        "vy": 0.02719354926736432,
        "vx": 0.004042388536739982
    },
    {
        "caption": "Privacy and security issues due to face recognition",
        "id": 11746,
        "label": "Case theme",
        "TrueLabel": "Case_theme_148",
        "showCaption": "Case theme",
        "visible": false,
        "index": 42,
        "x": -158.15788814582194,
        "y": 90.35913649025711,
        "vy": 0.02321432972888583,
        "vx": -0.02501428733613954
    },
    {
        "caption": "CNIL",
        "id": 11747,
        "label": "Influencer",
        "TrueLabel": "Influencer_148",
        "showCaption": "Influencer",
        "visible": false,
        "index": 43,
        "x": -51.37905262736017,
        "y": 258.8654305393548,
        "vy": 0.004494699557876272,
        "vx": 0.0004147065076762518
    },
    {
        "caption": "The vast majority of users have had their face data collected without their knowledge. The company provides search services to police departments in the form of a search engine.",
        "id": 11748,
        "label": "Results",
        "TrueLabel": "Results_148",
        "showCaption": "Results",
        "visible": false,
        "index": 44,
        "x": -310.57198943127923,
        "y": 163.28258662750818,
        "vy": 0.04246656154119164,
        "vx": -0.016745503467004725
    },
    {
        "caption": "The company did not obtain the consent of the persons concerned to collect and use their photographs to provide its software. clearview AI also did not have a legitimate interest in collecting and using this data, especially given the intrusive and large-scale nature of the process, which made it possible to retrieve the Internet images of millions of Internet users in France. On the other hand, the company did not respond effectively to access and deletion requests. It provided partial responses or did not respond to requests at all.",
        "id": 11749,
        "label": "Reason",
        "TrueLabel": "Reason_148",
        "showCaption": "Reason",
        "visible": false,
        "index": 45,
        "x": -75.5555949519951,
        "y": 356.00427602354637,
        "vy": 0.021357244262436327,
        "vx": 0.012425195229555036
    },
    {
        "caption": "Clearview AI: No response Public: The company's privacy collection service is done without notice to the person. CNIL: The company's actions violated two laws and penalties were imposed on it.",
        "id": 11750,
        "label": "Opinion",
        "TrueLabel": "Opinion_148",
        "showCaption": "Opinion",
        "visible": false,
        "index": 46,
        "x": -353.604557109678,
        "y": 334.2073798747107,
        "vy": 0.05958468775214211,
        "vx": -0.0008622827831722301
    },
    {
        "caption": "Response",
        "id": 11751,
        "label": "Response",
        "TrueLabel": "Response_148",
        "showCaption": "Response",
        "visible": false,
        "index": 47,
        "x": -377.5483885424529,
        "y": 237.18590975942445,
        "vy": 0.059360277084795174,
        "vx": -0.005689252552261401
    },
    {
        "caption": "URL",
        "id": 11752,
        "label": "URL",
        "TrueLabel": "URL_148",
        "showCaption": "URL",
        "visible": false,
        "index": 48,
        "x": -279.85283803755334,
        "y": 258.50360338185993,
        "vy": 0.03697793652985064,
        "vx": -0.0003952318996268981
    },
    {
        "caption": "Face Recognition",
        "id": 11753,
        "label": "Fields",
        "TrueLabel": "Fields_148",
        "showCaption": "Fields",
        "visible": false,
        "index": 49,
        "x": -211.2860545846226,
        "y": 174.9467130918701,
        "vy": 0.03131235066602451,
        "vx": -0.015516656843086082
    },
    {
        "caption": "Clearview AI",
        "id": 11754,
        "label": "Provider",
        "TrueLabel": "Provider_148",
        "showCaption": "Provider",
        "visible": false,
        "index": 50,
        "x": -257.2399313300209,
        "y": 78.84842195339654,
        "vy": 0.02914965896144927,
        "vx": -0.03163738147383149
    },
    {
        "caption": "The cause of the problem",
        "id": 11755,
        "label": "The cause of the problem",
        "TrueLabel": "The_cause_of_the_problem_148",
        "showCaption": "The cause of the problem",
        "visible": false,
        "index": 51,
        "x": -111.40824835178519,
        "y": 178.93396986250613,
        "vy": 0.014110674389438808,
        "vx": -0.013766646666111623
    },
    {
        "caption": "Positions in business conduct",
        "id": 11756,
        "label": "Positions in business conduct",
        "TrueLabel": "Positions_in_business_conduct_148",
        "showCaption": "Positions in business conduct",
        "visible": false,
        "index": 52,
        "x": -58.431351697691134,
        "y": 94.11977088447179,
        "vy": 0.0099411364361451,
        "vx": -0.02044129594541348
    },
    {
        "caption": "Negative",
        "id": 11757,
        "label": "Attitude",
        "TrueLabel": "Attitude_148",
        "showCaption": "Attitude",
        "visible": false,
        "index": 53,
        "x": -256.0849810875112,
        "y": 355.55569778790607,
        "vy": 0.037106613556001165,
        "vx": 0.008285535833837088
    },
    {
        "caption": "Clearview AI collects photographs from many websites, including social media. It collects all the photographs that are directly accessible on these networks (i.e. that can be viewed without logging in to an account). Images are also extracted from videos available online on all platforms. Thus, the company has collected over 20 billion images worldwide. Thanks to this collection, the company markets access to its image database in the form of a search engine in which a person can be searched using a photograph. The company offers this service to law enforcement authorities in order to identify perpetrators or victims of crime. Facial recognition technology is used to query the search engine and find a person based on their photograph. In order to do so, the company builds a \"biometric template\", i.e. a digital representation of a person's physical characteristics (the face in this case). These biometric data are particularly sensitive, especially because they are linked to our physical identity (what we are) and enable us to identify ourselves in a unique way. The vast majority of people whose images are collected into the search engine are unaware of this feature.",
        "id": 11758,
        "label": "Description",
        "TrueLabel": "Description_148",
        "showCaption": "Description",
        "visible": false,
        "index": 54,
        "x": -165.8829498252737,
        "y": 398.72505526011173,
        "vy": 0.027453762980246977,
        "vx": 0.012905918308380199
    },
    {
        "caption": "Positional attribute",
        "id": 11759,
        "label": "Positional attribute",
        "TrueLabel": "Positional_attribute_148",
        "showCaption": "Positional attribute",
        "visible": false,
        "index": 55,
        "x": 281.3736270370254,
        "y": 67.25100190580473,
        "vy": -0.02451354146582498,
        "vx": 0.030157993376714178
    },
    {
        "caption": "Positional attributes in early stages",
        "id": 11760,
        "label": "Positional attributes in early stages",
        "TrueLabel": "Positional_attributes_in_early_stages_148",
        "showCaption": "Positional attributes in early stages",
        "visible": false,
        "index": 56,
        "x": 188.25501303947092,
        "y": 451.18864150302363,
        "vy": -0.008207092796300124,
        "vx": -0.03329817569673069
    },
    {
        "caption": "Data acquisition",
        "id": 11761,
        "label": "Data acquisition",
        "TrueLabel": "Data_acquisition_148",
        "showCaption": "Data acquisition",
        "visible": false,
        "index": 57,
        "x": 153.22680408409767,
        "y": 534.1582242156207,
        "vy": 0.0003702857850862426,
        "vx": -0.007811685507253366
    },
    {
        "caption": "Data access",
        "id": 11762,
        "label": "Data access",
        "TrueLabel": "Data_access_148",
        "showCaption": "Data access",
        "visible": false,
        "index": 58,
        "x": 100.84414502834453,
        "y": 472.4970381584155,
        "vy": 0.04278681189557705,
        "vx": -0.02193768902858507
    },
    {
        "caption": "Data modeling",
        "id": 11763,
        "label": "Data modeling",
        "TrueLabel": "Data_modeling_148",
        "showCaption": "Data modeling",
        "visible": false,
        "index": 59,
        "x": 172.810927147344,
        "y": 611.7129661293701,
        "vy": 0.009508199647798395,
        "vx": -0.04326847974414854
    },
    {
        "caption": "Positional attributes in mid stages",
        "id": 11764,
        "label": "Positional attributes in mid stages",
        "TrueLabel": "Positional_attributes_in_mid_stages_148",
        "showCaption": "Positional attributes in mid stages",
        "visible": false,
        "index": 60,
        "x": 380.1256356695276,
        "y": 5.261148820689735,
        "vy": -0.014030397669005525,
        "vx": 0.03863605021454615
    },
    {
        "caption": "Behavior tracking",
        "id": 11765,
        "label": "Behavior tracking",
        "TrueLabel": "Behavior_tracking_148",
        "showCaption": "Behavior tracking",
        "visible": false,
        "index": 61,
        "x": 466.36549143640315,
        "y": -20.53082458958611,
        "vy": -0.015937520732532778,
        "vx": 0.037721010647415246
    },
    {
        "caption": "Behavior prediction",
        "id": 11766,
        "label": "Behavior prediction",
        "TrueLabel": "Behavior_prediction_148",
        "showCaption": "Behavior prediction",
        "visible": false,
        "index": 62,
        "x": 408.88573794291017,
        "y": -80.06182124867725,
        "vy": -0.023085694363075566,
        "vx": 0.008907077372258432
    },
    {
        "caption": "Behaviour nudging",
        "id": 11767,
        "label": "Behaviour nudging",
        "TrueLabel": "Behaviour_nudging_148",
        "showCaption": "Behaviour nudging",
        "visible": false,
        "index": 63,
        "x": 329.5852453079634,
        "y": -69.21864373401057,
        "vy": 0.004548976873145531,
        "vx": 0.011628838018545293
    },
    {
        "caption": "Positional attributes in end stages",
        "id": 11768,
        "label": "Positional attributes in end stages",
        "TrueLabel": "Positional_attributes_in_end_stages_148",
        "showCaption": "Positional attributes in end stages",
        "visible": false,
        "index": 64,
        "x": 65.71319995506185,
        "y": 555.3236195348352,
        "vy": 0.05565621494652705,
        "vx": 0.0065373669160604915
    },
    {
        "caption": "Wrong user group",
        "id": 11769,
        "label": "Wrong user group",
        "TrueLabel": "Wrong_user_group_148",
        "showCaption": "Wrong user group",
        "visible": false,
        "index": 65,
        "x": -41.47245142503112,
        "y": 578.6644136096144,
        "vy": 0.08466764375441858,
        "vx": -0.0666465325282156
    },
    {
        "caption": "Wrong user task",
        "id": 11770,
        "label": "Wrong user task",
        "TrueLabel": "Wrong_user_task_148",
        "showCaption": "Wrong user task",
        "visible": false,
        "index": 66,
        "x": 97.84706602951158,
        "y": 639.4379632828534,
        "vy": 0.06635019308990965,
        "vx": -0.02429090065064284
    },
    {
        "caption": "Surprising learning result",
        "id": 11771,
        "label": "Surprising learning result",
        "TrueLabel": "Surprising_learning_result_148",
        "showCaption": "Surprising learning result",
        "visible": false,
        "index": 67,
        "x": 18.20863318590887,
        "y": 631.8406635155079,
        "vy": 0.036290276175907764,
        "vx": -0.02142933901975994
    }
]

const links_full =[
    {
        "source": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11704,
            "label": "AI ethics issues",
            "TrueLabel": "AI_ethics_issues_148",
            "showCaption": "148",
            "visible": true,
            "index": 0,
            "x": 478.10642289584933,
            "y": 263.1644924843755,
            "vy": 0.19544733635425482,
            "vx": 0.2715761400130931
        },
        "target": {
            "caption": "Cases of AI ethics issues",
            "id": 11740,
            "label": "Cases of AI ethics issues",
            "TrueLabel": "Cases_of_AI_ethics_issues_148",
            "showCaption": "Cases of AI ethics issues",
            "visible": false,
            "index": 36,
            "x": 78.71122796818703,
            "y": 151.18040767298737,
            "vy": 0.48350697420244204,
            "vx": -0.2736901830916339
        },
        "visible": false,
        "index": 0
    },
    {
        "source": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11704,
            "label": "AI ethics issues",
            "TrueLabel": "AI_ethics_issues_148",
            "showCaption": "148",
            "visible": true,
            "index": 0,
            "x": 478.10642289584933,
            "y": 263.1644924843755,
            "vy": 0.19544733635425482,
            "vx": 0.2715761400130931
        },
        "target": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "visible": false,
        "index": 1
    },
    {
        "source": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11704,
            "label": "AI ethics issues",
            "TrueLabel": "AI_ethics_issues_148",
            "showCaption": "148",
            "visible": true,
            "index": 0,
            "x": 478.10642289584933,
            "y": 263.1644924843755,
            "vy": 0.19544733635425482,
            "vx": 0.2715761400130931
        },
        "target": {
            "caption": "AI ethics issue resolution measures",
            "id": 11724,
            "label": "AI ethics issue resolution measures",
            "TrueLabel": "AI_ethics_issue_resolution_measures_148",
            "showCaption": "AI ethics issue resolution measures",
            "visible": false,
            "index": 20,
            "x": 770.2678133213426,
            "y": 201.5125263486689,
            "vy": 0.17494348882422917,
            "vx": 0.2650242664902796
        },
        "visible": false,
        "index": 2
    },
    {
        "source": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11704,
            "label": "AI ethics issues",
            "TrueLabel": "AI_ethics_issues_148",
            "showCaption": "148",
            "visible": true,
            "index": 0,
            "x": 478.10642289584933,
            "y": 263.1644924843755,
            "vy": 0.19544733635425482,
            "vx": 0.2715761400130931
        },
        "target": {
            "caption": "Time attributes of AI ethical issues",
            "id": 11705,
            "label": "Time attributes of AI ethical issues",
            "TrueLabel": "Time_attributes_of_AI_ethical_issues_148",
            "showCaption": "Time attributes of AI ethical issues",
            "visible": false,
            "index": 1,
            "x": 184.33001776034908,
            "y": 320.3995644665143,
            "vy": 0.2183417738882938,
            "vx": 0.3578904922391167
        },
        "visible": false,
        "index": 3
    },
    {
        "source": {
            "caption": "Time attributes of AI ethical issues",
            "id": 11705,
            "label": "Time attributes of AI ethical issues",
            "TrueLabel": "Time_attributes_of_AI_ethical_issues_148",
            "showCaption": "Time attributes of AI ethical issues",
            "visible": false,
            "index": 1,
            "x": 184.33001776034908,
            "y": 320.3995644665143,
            "vy": 0.2183417738882938,
            "vx": 0.3578904922391167
        },
        "target": {
            "caption": "Life cycle of Al technology or product",
            "id": 11706,
            "label": "Life cycle of Al technology or product",
            "TrueLabel": "Life_cycle_of_Al_technology_or_product_148",
            "showCaption": "Life cycle of Al technology or product",
            "visible": false,
            "index": 2,
            "x": 15.51283564358124,
            "y": 310.7587860697754,
            "vy": 1.2281944326645278,
            "vx": 0.5419066440842614
        },
        "visible": false,
        "index": 4
    },
    {
        "source": {
            "caption": "Time attributes of AI ethical issues",
            "id": 11705,
            "label": "Time attributes of AI ethical issues",
            "TrueLabel": "Time_attributes_of_AI_ethical_issues_148",
            "showCaption": "Time attributes of AI ethical issues",
            "visible": false,
            "index": 1,
            "x": 184.33001776034908,
            "y": 320.3995644665143,
            "vy": 0.2183417738882938,
            "vx": 0.3578904922391167
        },
        "target": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11704,
            "label": "AI ethics issues",
            "TrueLabel": "AI_ethics_issues_148",
            "showCaption": "148",
            "visible": true,
            "index": 0,
            "x": 478.10642289584933,
            "y": 263.1644924843755,
            "vy": 0.19544733635425482,
            "vx": 0.2715761400130931
        },
        "visible": false,
        "index": 5
    },
    {
        "source": {
            "caption": "Life cycle of Al technology or product",
            "id": 11706,
            "label": "Life cycle of Al technology or product",
            "TrueLabel": "Life_cycle_of_Al_technology_or_product_148",
            "showCaption": "Life cycle of Al technology or product",
            "visible": false,
            "index": 2,
            "x": 15.51283564358124,
            "y": 310.7587860697754,
            "vy": 1.2281944326645278,
            "vx": 0.5419066440842614
        },
        "target": {
            "caption": "AI's service & work sessions",
            "id": 11719,
            "label": "AI's service & work sessions",
            "TrueLabel": "AI's_service_&_work_sessions_148",
            "showCaption": "AI's service & work sessions",
            "visible": false,
            "index": 15,
            "x": -51.233592711103654,
            "y": 405.42567682833555,
            "vy": 0.01520694080630609,
            "vx": -1.1635276581689642
        },
        "visible": false,
        "index": 6
    },
    {
        "source": {
            "caption": "Life cycle of Al technology or product",
            "id": 11706,
            "label": "Life cycle of Al technology or product",
            "TrueLabel": "Life_cycle_of_Al_technology_or_product_148",
            "showCaption": "Life cycle of Al technology or product",
            "visible": false,
            "index": 2,
            "x": 15.51283564358124,
            "y": 310.7587860697754,
            "vy": 1.2281944326645278,
            "vx": 0.5419066440842614
        },
        "target": {
            "caption": "Design session of Al",
            "id": 11707,
            "label": "Design session of Al",
            "TrueLabel": "Design_session_of_Al_148",
            "showCaption": "Design session of Al",
            "visible": false,
            "index": 3,
            "x": 283.8663020902723,
            "y": 429.7540560060955,
            "vy": 0.8187484313978194,
            "vx": -0.08686577846086296
        },
        "visible": false,
        "index": 7
    },
    {
        "source": {
            "caption": "Life cycle of Al technology or product",
            "id": 11706,
            "label": "Life cycle of Al technology or product",
            "TrueLabel": "Life_cycle_of_Al_technology_or_product_148",
            "showCaption": "Life cycle of Al technology or product",
            "visible": false,
            "index": 2,
            "x": 15.51283564358124,
            "y": 310.7587860697754,
            "vy": 1.2281944326645278,
            "vx": 0.5419066440842614
        },
        "target": {
            "caption": "Time attributes of AI ethical issues",
            "id": 11705,
            "label": "Time attributes of AI ethical issues",
            "TrueLabel": "Time_attributes_of_AI_ethical_issues_148",
            "showCaption": "Time attributes of AI ethical issues",
            "visible": false,
            "index": 1,
            "x": 184.33001776034908,
            "y": 320.3995644665143,
            "vy": 0.2183417738882938,
            "vx": 0.3578904922391167
        },
        "visible": false,
        "index": 8
    },
    {
        "source": {
            "caption": "Design session of Al",
            "id": 11707,
            "label": "Design session of Al",
            "TrueLabel": "Design_session_of_Al_148",
            "showCaption": "Design session of Al",
            "visible": false,
            "index": 3,
            "x": 283.8663020902723,
            "y": 429.7540560060955,
            "vy": 0.8187484313978194,
            "vx": -0.08686577846086296
        },
        "target": {
            "caption": "AI Products",
            "id": 11712,
            "label": "AI Products",
            "TrueLabel": "AI_Products_148",
            "showCaption": "AI Products",
            "visible": false,
            "index": 8,
            "x": 13.480154528164181,
            "y": 466.23878377056496,
            "vy": 1.1621807739342207,
            "vx": -2.141952144526507
        },
        "visible": false,
        "index": 9
    },
    {
        "source": {
            "caption": "Design session of Al",
            "id": 11707,
            "label": "Design session of Al",
            "TrueLabel": "Design_session_of_Al_148",
            "showCaption": "Design session of Al",
            "visible": false,
            "index": 3,
            "x": 283.8663020902723,
            "y": 429.7540560060955,
            "vy": 0.8187484313978194,
            "vx": -0.08686577846086296
        },
        "target": {
            "caption": "AI Designers",
            "id": 11708,
            "label": "AI Designers",
            "TrueLabel": "AI_Designers_148",
            "showCaption": "AI Designers",
            "visible": false,
            "index": 4,
            "x": 253.48018503157772,
            "y": 206.6790355232919,
            "vy": 0.569380434204664,
            "vx": 0.16118769774305228
        },
        "visible": false,
        "index": 10
    },
    {
        "source": {
            "caption": "Design session of Al",
            "id": 11707,
            "label": "Design session of Al",
            "TrueLabel": "Design_session_of_Al_148",
            "showCaption": "Design session of Al",
            "visible": false,
            "index": 3,
            "x": 283.8663020902723,
            "y": 429.7540560060955,
            "vy": 0.8187484313978194,
            "vx": -0.08686577846086296
        },
        "target": {
            "caption": "Life cycle of Al technology or product",
            "id": 11706,
            "label": "Life cycle of Al technology or product",
            "TrueLabel": "Life_cycle_of_Al_technology_or_product_148",
            "showCaption": "Life cycle of Al technology or product",
            "visible": false,
            "index": 2,
            "x": 15.51283564358124,
            "y": 310.7587860697754,
            "vy": 1.2281944326645278,
            "vx": 0.5419066440842614
        },
        "visible": false,
        "index": 11
    },
    {
        "source": {
            "caption": "AI Designers",
            "id": 11708,
            "label": "AI Designers",
            "TrueLabel": "AI_Designers_148",
            "showCaption": "AI Designers",
            "visible": false,
            "index": 4,
            "x": 253.48018503157772,
            "y": 206.6790355232919,
            "vy": 0.569380434204664,
            "vx": 0.16118769774305228
        },
        "target": {
            "caption": "ethics Issues Caused by Al Designers",
            "id": 11709,
            "label": "ethics Issues Caused by Al Designers",
            "TrueLabel": "ethics_Issues_Caused_by_Al_Designers_148",
            "showCaption": "ethics Issues Caused by Al Designers",
            "visible": false,
            "index": 5,
            "x": 174.74062388673673,
            "y": 60.45859455846843,
            "vy": 0.16072408973875274,
            "vx": -0.20791655433055597
        },
        "visible": false,
        "index": 12
    },
    {
        "source": {
            "caption": "AI Designers",
            "id": 11708,
            "label": "AI Designers",
            "TrueLabel": "AI_Designers_148",
            "showCaption": "AI Designers",
            "visible": false,
            "index": 4,
            "x": 253.48018503157772,
            "y": 206.6790355232919,
            "vy": 0.569380434204664,
            "vx": 0.16118769774305228
        },
        "target": {
            "caption": "Design session of Al",
            "id": 11707,
            "label": "Design session of Al",
            "TrueLabel": "Design_session_of_Al_148",
            "showCaption": "Design session of Al",
            "visible": false,
            "index": 3,
            "x": 283.8663020902723,
            "y": 429.7540560060955,
            "vy": 0.8187484313978194,
            "vx": -0.08686577846086296
        },
        "visible": false,
        "index": 13
    },
    {
        "source": {
            "caption": "ethics Issues Caused by Al Designers",
            "id": 11709,
            "label": "ethics Issues Caused by Al Designers",
            "TrueLabel": "ethics_Issues_Caused_by_Al_Designers_148",
            "showCaption": "ethics Issues Caused by Al Designers",
            "visible": false,
            "index": 5,
            "x": 174.74062388673673,
            "y": 60.45859455846843,
            "vy": 0.16072408973875274,
            "vx": -0.20791655433055597
        },
        "target": {
            "caption": "Negative design that produces negative results that meet expectations",
            "id": 11711,
            "label": "Negative design that produces negative results that meet expectations",
            "TrueLabel": "Negative_design_that_produces_negative_results_that_meet_expectations_148",
            "showCaption": "Negative design that produces negative results that meet expectations",
            "visible": false,
            "index": 7,
            "x": 193.34715055811333,
            "y": 139.66122810291716,
            "vy": -0.5306647520575121,
            "vx": -0.1815127168764107
        },
        "visible": false,
        "index": 14
    },
    {
        "source": {
            "caption": "ethics Issues Caused by Al Designers",
            "id": 11709,
            "label": "ethics Issues Caused by Al Designers",
            "TrueLabel": "ethics_Issues_Caused_by_Al_Designers_148",
            "showCaption": "ethics Issues Caused by Al Designers",
            "visible": false,
            "index": 5,
            "x": 174.74062388673673,
            "y": 60.45859455846843,
            "vy": 0.16072408973875274,
            "vx": -0.20791655433055597
        },
        "target": {
            "caption": "Positive design that produces negative results that do not meet expectations",
            "id": 11710,
            "label": "Positive design that produces negative results that do not meet expectations",
            "TrueLabel": "Positive_design_that_produces_negative_results_that_do_not_meet_expectations_148",
            "showCaption": "Positive design that produces negative results that do not meet expectations",
            "visible": false,
            "index": 6,
            "x": 199.1838288557835,
            "y": 197.11457759919907,
            "vy": -0.16380069062027597,
            "vx": 0.0324468256277499
        },
        "visible": false,
        "index": 15
    },
    {
        "source": {
            "caption": "ethics Issues Caused by Al Designers",
            "id": 11709,
            "label": "ethics Issues Caused by Al Designers",
            "TrueLabel": "ethics_Issues_Caused_by_Al_Designers_148",
            "showCaption": "ethics Issues Caused by Al Designers",
            "visible": false,
            "index": 5,
            "x": 174.74062388673673,
            "y": 60.45859455846843,
            "vy": 0.16072408973875274,
            "vx": -0.20791655433055597
        },
        "target": {
            "caption": "AI Designers",
            "id": 11708,
            "label": "AI Designers",
            "TrueLabel": "AI_Designers_148",
            "showCaption": "AI Designers",
            "visible": false,
            "index": 4,
            "x": 253.48018503157772,
            "y": 206.6790355232919,
            "vy": 0.569380434204664,
            "vx": 0.16118769774305228
        },
        "visible": false,
        "index": 16
    },
    {
        "source": {
            "caption": "Positive design that produces negative results that do not meet expectations",
            "id": 11710,
            "label": "Positive design that produces negative results that do not meet expectations",
            "TrueLabel": "Positive_design_that_produces_negative_results_that_do_not_meet_expectations_148",
            "showCaption": "Positive design that produces negative results that do not meet expectations",
            "visible": false,
            "index": 6,
            "x": 199.1838288557835,
            "y": 197.11457759919907,
            "vy": -0.16380069062027597,
            "vx": 0.0324468256277499
        },
        "target": {
            "caption": "ethics Issues Caused by Al Designers",
            "id": 11709,
            "label": "ethics Issues Caused by Al Designers",
            "TrueLabel": "ethics_Issues_Caused_by_Al_Designers_148",
            "showCaption": "ethics Issues Caused by Al Designers",
            "visible": false,
            "index": 5,
            "x": 174.74062388673673,
            "y": 60.45859455846843,
            "vy": 0.16072408973875274,
            "vx": -0.20791655433055597
        },
        "visible": false,
        "index": 17
    },
    {
        "source": {
            "caption": "Negative design that produces negative results that meet expectations",
            "id": 11711,
            "label": "Negative design that produces negative results that meet expectations",
            "TrueLabel": "Negative_design_that_produces_negative_results_that_meet_expectations_148",
            "showCaption": "Negative design that produces negative results that meet expectations",
            "visible": false,
            "index": 7,
            "x": 193.34715055811333,
            "y": 139.66122810291716,
            "vy": -0.5306647520575121,
            "vx": -0.1815127168764107
        },
        "target": {
            "caption": "ethics Issues Caused by Al Designers",
            "id": 11709,
            "label": "ethics Issues Caused by Al Designers",
            "TrueLabel": "ethics_Issues_Caused_by_Al_Designers_148",
            "showCaption": "ethics Issues Caused by Al Designers",
            "visible": false,
            "index": 5,
            "x": 174.74062388673673,
            "y": 60.45859455846843,
            "vy": 0.16072408973875274,
            "vx": -0.20791655433055597
        },
        "visible": false,
        "index": 18
    },
    {
        "source": {
            "caption": "AI Products",
            "id": 11712,
            "label": "AI Products",
            "TrueLabel": "AI_Products_148",
            "showCaption": "AI Products",
            "visible": false,
            "index": 8,
            "x": 13.480154528164181,
            "y": 466.23878377056496,
            "vy": 1.1621807739342207,
            "vx": -2.141952144526507
        },
        "target": {
            "caption": "AI's service & work sessions",
            "id": 11719,
            "label": "AI's service & work sessions",
            "TrueLabel": "AI's_service_&_work_sessions_148",
            "showCaption": "AI's service & work sessions",
            "visible": false,
            "index": 15,
            "x": -51.233592711103654,
            "y": 405.42567682833555,
            "vy": 0.01520694080630609,
            "vx": -1.1635276581689642
        },
        "visible": false,
        "index": 19
    },
    {
        "source": {
            "caption": "AI Products",
            "id": 11712,
            "label": "AI Products",
            "TrueLabel": "AI_Products_148",
            "showCaption": "AI Products",
            "visible": false,
            "index": 8,
            "x": 13.480154528164181,
            "y": 466.23878377056496,
            "vy": 1.1621807739342207,
            "vx": -2.141952144526507
        },
        "target": {
            "caption": "ethics issues caused by Al products",
            "id": 11713,
            "label": "ethics issues caused by Al products",
            "TrueLabel": "ethics_issues_caused_by_Al_products_148",
            "showCaption": "ethics issues caused by Al products",
            "visible": false,
            "index": 9,
            "x": 58.24041129159449,
            "y": 425.95353325961094,
            "vy": 2.103194452065792,
            "vx": -2.1864057263275005
        },
        "visible": false,
        "index": 20
    },
    {
        "source": {
            "caption": "AI Products",
            "id": 11712,
            "label": "AI Products",
            "TrueLabel": "AI_Products_148",
            "showCaption": "AI Products",
            "visible": false,
            "index": 8,
            "x": 13.480154528164181,
            "y": 466.23878377056496,
            "vy": 1.1621807739342207,
            "vx": -2.141952144526507
        },
        "target": {
            "caption": "Design session of Al",
            "id": 11707,
            "label": "Design session of Al",
            "TrueLabel": "Design_session_of_Al_148",
            "showCaption": "Design session of Al",
            "visible": false,
            "index": 3,
            "x": 283.8663020902723,
            "y": 429.7540560060955,
            "vy": 0.8187484313978194,
            "vx": -0.08686577846086296
        },
        "visible": false,
        "index": 21
    },
    {
        "source": {
            "caption": "ethics issues caused by Al products",
            "id": 11713,
            "label": "ethics issues caused by Al products",
            "TrueLabel": "ethics_issues_caused_by_Al_products_148",
            "showCaption": "ethics issues caused by Al products",
            "visible": false,
            "index": 9,
            "x": 58.24041129159449,
            "y": 425.95353325961094,
            "vy": 2.103194452065792,
            "vx": -2.1864057263275005
        },
        "target": {
            "caption": "Non-human-like ethics issues",
            "id": 11717,
            "label": "Non-human-like ethics issues",
            "TrueLabel": "Non-human-like_ethics_issues_148",
            "showCaption": "Non-human-like ethics issues",
            "visible": false,
            "index": 13,
            "x": 298.55774222551713,
            "y": 360.6772340551456,
            "vy": 0.7923068610809679,
            "vx": 0.2870388505654347
        },
        "visible": false,
        "index": 22
    },
    {
        "source": {
            "caption": "ethics issues caused by Al products",
            "id": 11713,
            "label": "ethics issues caused by Al products",
            "TrueLabel": "ethics_issues_caused_by_Al_products_148",
            "showCaption": "ethics issues caused by Al products",
            "visible": false,
            "index": 9,
            "x": 58.24041129159449,
            "y": 425.95353325961094,
            "vy": 2.103194452065792,
            "vx": -2.1864057263275005
        },
        "target": {
            "caption": "Human-like ethics issues",
            "id": 11714,
            "label": "Human-like ethics issues",
            "TrueLabel": "Human-like_ethics_issues_148",
            "showCaption": "Human-like ethics issues",
            "visible": false,
            "index": 10,
            "x": 79.07659145378706,
            "y": 369.1764737302684,
            "vy": 2.0360044538678737,
            "vx": 1.1839548959808261
        },
        "visible": false,
        "index": 23
    },
    {
        "source": {
            "caption": "ethics issues caused by Al products",
            "id": 11713,
            "label": "ethics issues caused by Al products",
            "TrueLabel": "ethics_issues_caused_by_Al_products_148",
            "showCaption": "ethics issues caused by Al products",
            "visible": false,
            "index": 9,
            "x": 58.24041129159449,
            "y": 425.95353325961094,
            "vy": 2.103194452065792,
            "vx": -2.1864057263275005
        },
        "target": {
            "caption": "AI Products",
            "id": 11712,
            "label": "AI Products",
            "TrueLabel": "AI_Products_148",
            "showCaption": "AI Products",
            "visible": false,
            "index": 8,
            "x": 13.480154528164181,
            "y": 466.23878377056496,
            "vy": 1.1621807739342207,
            "vx": -2.141952144526507
        },
        "visible": false,
        "index": 24
    },
    {
        "source": {
            "caption": "Human-like ethics issues",
            "id": 11714,
            "label": "Human-like ethics issues",
            "TrueLabel": "Human-like_ethics_issues_148",
            "showCaption": "Human-like ethics issues",
            "visible": false,
            "index": 10,
            "x": 79.07659145378706,
            "y": 369.1764737302684,
            "vy": 2.0360044538678737,
            "vx": 1.1839548959808261
        },
        "target": {
            "caption": "Not human-like enough to cause ethics problems",
            "id": 11716,
            "label": "Not human-like enough to cause ethics problems",
            "TrueLabel": "Not_human-like_enough_to_cause_ethics_problems_148",
            "showCaption": "Not human-like enough to cause ethics problems",
            "visible": false,
            "index": 12,
            "x": 88.33843850415431,
            "y": 275.2264178913982,
            "vy": 0.4773187631048088,
            "vx": -0.08138933091518101
        },
        "visible": false,
        "index": 25
    },
    {
        "source": {
            "caption": "Human-like ethics issues",
            "id": 11714,
            "label": "Human-like ethics issues",
            "TrueLabel": "Human-like_ethics_issues_148",
            "showCaption": "Human-like ethics issues",
            "visible": false,
            "index": 10,
            "x": 79.07659145378706,
            "y": 369.1764737302684,
            "vy": 2.0360044538678737,
            "vx": 1.1839548959808261
        },
        "target": {
            "caption": "Overly human-like and leading to ethics problems",
            "id": 11715,
            "label": "Overly human-like and leading to ethics problems",
            "TrueLabel": "Overly_human-like_and_leading_to_ethics_problems_148",
            "showCaption": "Overly human-like and leading to ethics problems",
            "visible": false,
            "index": 11,
            "x": 22.533021317006156,
            "y": 397.17551156897343,
            "vy": 1.1162654422372067,
            "vx": -1.0505901080776416
        },
        "visible": false,
        "index": 26
    },
    {
        "source": {
            "caption": "Human-like ethics issues",
            "id": 11714,
            "label": "Human-like ethics issues",
            "TrueLabel": "Human-like_ethics_issues_148",
            "showCaption": "Human-like ethics issues",
            "visible": false,
            "index": 10,
            "x": 79.07659145378706,
            "y": 369.1764737302684,
            "vy": 2.0360044538678737,
            "vx": 1.1839548959808261
        },
        "target": {
            "caption": "ethics issues caused by Al products",
            "id": 11713,
            "label": "ethics issues caused by Al products",
            "TrueLabel": "ethics_issues_caused_by_Al_products_148",
            "showCaption": "ethics issues caused by Al products",
            "visible": false,
            "index": 9,
            "x": 58.24041129159449,
            "y": 425.95353325961094,
            "vy": 2.103194452065792,
            "vx": -2.1864057263275005
        },
        "visible": false,
        "index": 27
    },
    {
        "source": {
            "caption": "Overly human-like and leading to ethics problems",
            "id": 11715,
            "label": "Overly human-like and leading to ethics problems",
            "TrueLabel": "Overly_human-like_and_leading_to_ethics_problems_148",
            "showCaption": "Overly human-like and leading to ethics problems",
            "visible": false,
            "index": 11,
            "x": 22.533021317006156,
            "y": 397.17551156897343,
            "vy": 1.1162654422372067,
            "vx": -1.0505901080776416
        },
        "target": {
            "caption": "Human-like ethics issues",
            "id": 11714,
            "label": "Human-like ethics issues",
            "TrueLabel": "Human-like_ethics_issues_148",
            "showCaption": "Human-like ethics issues",
            "visible": false,
            "index": 10,
            "x": 79.07659145378706,
            "y": 369.1764737302684,
            "vy": 2.0360044538678737,
            "vx": 1.1839548959808261
        },
        "visible": false,
        "index": 28
    },
    {
        "source": {
            "caption": "Not human-like enough to cause ethics problems",
            "id": 11716,
            "label": "Not human-like enough to cause ethics problems",
            "TrueLabel": "Not_human-like_enough_to_cause_ethics_problems_148",
            "showCaption": "Not human-like enough to cause ethics problems",
            "visible": false,
            "index": 12,
            "x": 88.33843850415431,
            "y": 275.2264178913982,
            "vy": 0.4773187631048088,
            "vx": -0.08138933091518101
        },
        "target": {
            "caption": "Human-like ethics issues",
            "id": 11714,
            "label": "Human-like ethics issues",
            "TrueLabel": "Human-like_ethics_issues_148",
            "showCaption": "Human-like ethics issues",
            "visible": false,
            "index": 10,
            "x": 79.07659145378706,
            "y": 369.1764737302684,
            "vy": 2.0360044538678737,
            "vx": 1.1839548959808261
        },
        "visible": false,
        "index": 29
    },
    {
        "source": {
            "caption": "Non-human-like ethics issues",
            "id": 11717,
            "label": "Non-human-like ethics issues",
            "TrueLabel": "Non-human-like_ethics_issues_148",
            "showCaption": "Non-human-like ethics issues",
            "visible": false,
            "index": 13,
            "x": 298.55774222551713,
            "y": 360.6772340551456,
            "vy": 0.7923068610809679,
            "vx": 0.2870388505654347
        },
        "target": {
            "caption": "Not enough beyond human to cause ethics problems",
            "id": 11718,
            "label": "Not enough beyond human to cause ethics problems",
            "TrueLabel": "Not_enough_beyond_human_to_cause_ethics_problems_148",
            "showCaption": "Not enough beyond human to cause ethics problems",
            "visible": false,
            "index": 14,
            "x": 350.9705444559449,
            "y": 443.8155884805969,
            "vy": 0.3856536102295438,
            "vx": 0.2784341106472036
        },
        "visible": false,
        "index": 30
    },
    {
        "source": {
            "caption": "Non-human-like ethics issues",
            "id": 11717,
            "label": "Non-human-like ethics issues",
            "TrueLabel": "Non-human-like_ethics_issues_148",
            "showCaption": "Non-human-like ethics issues",
            "visible": false,
            "index": 13,
            "x": 298.55774222551713,
            "y": 360.6772340551456,
            "vy": 0.7923068610809679,
            "vx": 0.2870388505654347
        },
        "target": {
            "caption": "ethics issues caused by Al products",
            "id": 11713,
            "label": "ethics issues caused by Al products",
            "TrueLabel": "ethics_issues_caused_by_Al_products_148",
            "showCaption": "ethics issues caused by Al products",
            "visible": false,
            "index": 9,
            "x": 58.24041129159449,
            "y": 425.95353325961094,
            "vy": 2.103194452065792,
            "vx": -2.1864057263275005
        },
        "visible": false,
        "index": 31
    },
    {
        "source": {
            "caption": "Not enough beyond human to cause ethics problems",
            "id": 11718,
            "label": "Not enough beyond human to cause ethics problems",
            "TrueLabel": "Not_enough_beyond_human_to_cause_ethics_problems_148",
            "showCaption": "Not enough beyond human to cause ethics problems",
            "visible": false,
            "index": 14,
            "x": 350.9705444559449,
            "y": 443.8155884805969,
            "vy": 0.3856536102295438,
            "vx": 0.2784341106472036
        },
        "target": {
            "caption": "Non-human-like ethics issues",
            "id": 11717,
            "label": "Non-human-like ethics issues",
            "TrueLabel": "Non-human-like_ethics_issues_148",
            "showCaption": "Non-human-like ethics issues",
            "visible": false,
            "index": 13,
            "x": 298.55774222551713,
            "y": 360.6772340551456,
            "vy": 0.7923068610809679,
            "vx": 0.2870388505654347
        },
        "visible": false,
        "index": 32
    },
    {
        "source": {
            "caption": "AI's service & work sessions",
            "id": 11719,
            "label": "AI's service & work sessions",
            "TrueLabel": "AI's_service_&_work_sessions_148",
            "showCaption": "AI's service & work sessions",
            "visible": false,
            "index": 15,
            "x": -51.233592711103654,
            "y": 405.42567682833555,
            "vy": 0.01520694080630609,
            "vx": -1.1635276581689642
        },
        "target": {
            "caption": "AI Products",
            "id": 11712,
            "label": "AI Products",
            "TrueLabel": "AI_Products_148",
            "showCaption": "AI Products",
            "visible": false,
            "index": 8,
            "x": 13.480154528164181,
            "y": 466.23878377056496,
            "vy": 1.1621807739342207,
            "vx": -2.141952144526507
        },
        "visible": false,
        "index": 33
    },
    {
        "source": {
            "caption": "AI's service & work sessions",
            "id": 11719,
            "label": "AI's service & work sessions",
            "TrueLabel": "AI's_service_&_work_sessions_148",
            "showCaption": "AI's service & work sessions",
            "visible": false,
            "index": 15,
            "x": -51.233592711103654,
            "y": 405.42567682833555,
            "vy": 0.01520694080630609,
            "vx": -1.1635276581689642
        },
        "target": {
            "caption": "Users",
            "id": 11720,
            "label": "Users",
            "TrueLabel": "Users_148",
            "showCaption": "Users",
            "visible": false,
            "index": 16,
            "x": -119.69171809848504,
            "y": 462.99764985299055,
            "vy": 1.0598760605887931,
            "vx": -0.31128367024100595
        },
        "visible": false,
        "index": 34
    },
    {
        "source": {
            "caption": "AI's service & work sessions",
            "id": 11719,
            "label": "AI's service & work sessions",
            "TrueLabel": "AI's_service_&_work_sessions_148",
            "showCaption": "AI's service & work sessions",
            "visible": false,
            "index": 15,
            "x": -51.233592711103654,
            "y": 405.42567682833555,
            "vy": 0.01520694080630609,
            "vx": -1.1635276581689642
        },
        "target": {
            "caption": "Life cycle of Al technology or product",
            "id": 11706,
            "label": "Life cycle of Al technology or product",
            "TrueLabel": "Life_cycle_of_Al_technology_or_product_148",
            "showCaption": "Life cycle of Al technology or product",
            "visible": false,
            "index": 2,
            "x": 15.51283564358124,
            "y": 310.7587860697754,
            "vy": 1.2281944326645278,
            "vx": 0.5419066440842614
        },
        "visible": false,
        "index": 35
    },
    {
        "source": {
            "caption": "Users",
            "id": 11720,
            "label": "Users",
            "TrueLabel": "Users_148",
            "showCaption": "Users",
            "visible": false,
            "index": 16,
            "x": -119.69171809848504,
            "y": 462.99764985299055,
            "vy": 1.0598760605887931,
            "vx": -0.31128367024100595
        },
        "target": {
            "caption": "ethics issues caused by Al users",
            "id": 11721,
            "label": "ethics issues caused by Al users",
            "TrueLabel": "ethics_issues_caused_by_Al_users_148",
            "showCaption": "ethics issues caused by Al users",
            "visible": false,
            "index": 17,
            "x": -186.93434113303016,
            "y": 439.479593819369,
            "vy": 2.112805768250892,
            "vx": -0.7533990826743118
        },
        "visible": false,
        "index": 36
    },
    {
        "source": {
            "caption": "Users",
            "id": 11720,
            "label": "Users",
            "TrueLabel": "Users_148",
            "showCaption": "Users",
            "visible": false,
            "index": 16,
            "x": -119.69171809848504,
            "y": 462.99764985299055,
            "vy": 1.0598760605887931,
            "vx": -0.31128367024100595
        },
        "target": {
            "caption": "AI's service & work sessions",
            "id": 11719,
            "label": "AI's service & work sessions",
            "TrueLabel": "AI's_service_&_work_sessions_148",
            "showCaption": "AI's service & work sessions",
            "visible": false,
            "index": 15,
            "x": -51.233592711103654,
            "y": 405.42567682833555,
            "vy": 0.01520694080630609,
            "vx": -1.1635276581689642
        },
        "visible": false,
        "index": 37
    },
    {
        "source": {
            "caption": "ethics issues caused by Al users",
            "id": 11721,
            "label": "ethics issues caused by Al users",
            "TrueLabel": "ethics_issues_caused_by_Al_users_148",
            "showCaption": "ethics issues caused by Al users",
            "visible": false,
            "index": 17,
            "x": -186.93434113303016,
            "y": 439.479593819369,
            "vy": 2.112805768250892,
            "vx": -0.7533990826743118
        },
        "target": {
            "caption": "ethics issues due to wrong user tasks",
            "id": 11723,
            "label": "ethics issues due to wrong user tasks",
            "TrueLabel": "ethics_issues_due_to_wrong_user_tasks_148",
            "showCaption": "ethics issues due to wrong user tasks",
            "visible": false,
            "index": 19,
            "x": -247.69179176522388,
            "y": 454.83789261479075,
            "vy": 2.01160068347071,
            "vx": -0.7493494734397826
        },
        "visible": false,
        "index": 38
    },
    {
        "source": {
            "caption": "ethics issues caused by Al users",
            "id": 11721,
            "label": "ethics issues caused by Al users",
            "TrueLabel": "ethics_issues_caused_by_Al_users_148",
            "showCaption": "ethics issues caused by Al users",
            "visible": false,
            "index": 17,
            "x": -186.93434113303016,
            "y": 439.479593819369,
            "vy": 2.112805768250892,
            "vx": -0.7533990826743118
        },
        "target": {
            "caption": "ethics issues caused by the wrong user group",
            "id": 11722,
            "label": "ethics issues caused by the wrong user group",
            "TrueLabel": "ethics_issues_caused_by_the_wrong_user_group_148",
            "showCaption": "ethics issues caused by the wrong user group",
            "visible": false,
            "index": 18,
            "x": -235.3142914488277,
            "y": 401.3848908195042,
            "vy": 1.9147819839500078,
            "vx": -0.5439930636740685
        },
        "visible": false,
        "index": 39
    },
    {
        "source": {
            "caption": "ethics issues caused by Al users",
            "id": 11721,
            "label": "ethics issues caused by Al users",
            "TrueLabel": "ethics_issues_caused_by_Al_users_148",
            "showCaption": "ethics issues caused by Al users",
            "visible": false,
            "index": 17,
            "x": -186.93434113303016,
            "y": 439.479593819369,
            "vy": 2.112805768250892,
            "vx": -0.7533990826743118
        },
        "target": {
            "caption": "Users",
            "id": 11720,
            "label": "Users",
            "TrueLabel": "Users_148",
            "showCaption": "Users",
            "visible": false,
            "index": 16,
            "x": -119.69171809848504,
            "y": 462.99764985299055,
            "vy": 1.0598760605887931,
            "vx": -0.31128367024100595
        },
        "visible": false,
        "index": 40
    },
    {
        "source": {
            "caption": "ethics issues caused by the wrong user group",
            "id": 11722,
            "label": "ethics issues caused by the wrong user group",
            "TrueLabel": "ethics_issues_caused_by_the_wrong_user_group_148",
            "showCaption": "ethics issues caused by the wrong user group",
            "visible": false,
            "index": 18,
            "x": -235.3142914488277,
            "y": 401.3848908195042,
            "vy": 1.9147819839500078,
            "vx": -0.5439930636740685
        },
        "target": {
            "caption": "ethics issues caused by Al users",
            "id": 11721,
            "label": "ethics issues caused by Al users",
            "TrueLabel": "ethics_issues_caused_by_Al_users_148",
            "showCaption": "ethics issues caused by Al users",
            "visible": false,
            "index": 17,
            "x": -186.93434113303016,
            "y": 439.479593819369,
            "vy": 2.112805768250892,
            "vx": -0.7533990826743118
        },
        "visible": false,
        "index": 41
    },
    {
        "source": {
            "caption": "ethics issues due to wrong user tasks",
            "id": 11723,
            "label": "ethics issues due to wrong user tasks",
            "TrueLabel": "ethics_issues_due_to_wrong_user_tasks_148",
            "showCaption": "ethics issues due to wrong user tasks",
            "visible": false,
            "index": 19,
            "x": -247.69179176522388,
            "y": 454.83789261479075,
            "vy": 2.01160068347071,
            "vx": -0.7493494734397826
        },
        "target": {
            "caption": "ethics issues caused by Al users",
            "id": 11721,
            "label": "ethics issues caused by Al users",
            "TrueLabel": "ethics_issues_caused_by_Al_users_148",
            "showCaption": "ethics issues caused by Al users",
            "visible": false,
            "index": 17,
            "x": -186.93434113303016,
            "y": 439.479593819369,
            "vy": 2.112805768250892,
            "vx": -0.7533990826743118
        },
        "visible": false,
        "index": 42
    },
    {
        "source": {
            "caption": "AI ethics issue resolution measures",
            "id": 11724,
            "label": "AI ethics issue resolution measures",
            "TrueLabel": "AI_ethics_issue_resolution_measures_148",
            "showCaption": "AI ethics issue resolution measures",
            "visible": false,
            "index": 20,
            "x": 770.2678133213426,
            "y": 201.5125263486689,
            "vy": 0.17494348882422917,
            "vx": 0.2650242664902796
        },
        "target": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "visible": false,
        "index": 43
    },
    {
        "source": {
            "caption": "AI ethics issue resolution measures",
            "id": 11724,
            "label": "AI ethics issue resolution measures",
            "TrueLabel": "AI_ethics_issue_resolution_measures_148",
            "showCaption": "AI ethics issue resolution measures",
            "visible": false,
            "index": 20,
            "x": 770.2678133213426,
            "y": 201.5125263486689,
            "vy": 0.17494348882422917,
            "vx": 0.2650242664902796
        },
        "target": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11704,
            "label": "AI ethics issues",
            "TrueLabel": "AI_ethics_issues_148",
            "showCaption": "148",
            "visible": true,
            "index": 0,
            "x": 478.10642289584933,
            "y": 263.1644924843755,
            "vy": 0.19544733635425482,
            "vx": 0.2715761400130931
        },
        "visible": false,
        "index": 44
    },
    {
        "source": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "target": {
            "caption": "Responsibility",
            "id": 11732,
            "label": "Responsibility",
            "TrueLabel": "Responsibility_148",
            "showCaption": "Responsibility",
            "visible": false,
            "index": 28,
            "x": 914.0396889463219,
            "y": 177.22070595047762,
            "vy": 0.20243629219778275,
            "vx": 0.3584846046794069
        },
        "visible": false,
        "index": 45
    },
    {
        "source": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "target": {
            "caption": "Non-maleficence",
            "id": 11731,
            "label": "Non-maleficence",
            "TrueLabel": "Non-maleficence_148",
            "showCaption": "Non-maleficence",
            "visible": false,
            "index": 27,
            "x": 1113.8822790627014,
            "y": 278.09586148352065,
            "vy": -0.11517651686854277,
            "vx": 0.5725969956523719
        },
        "visible": false,
        "index": 46
    },
    {
        "source": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "target": {
            "caption": "Trust",
            "id": 11730,
            "label": "Trust",
            "TrueLabel": "Trust_148",
            "showCaption": "Trust",
            "visible": false,
            "index": 26,
            "x": 1052.5441031878738,
            "y": 357.07447449649885,
            "vy": -0.06571852207839579,
            "vx": 0.6362301032984331
        },
        "visible": false,
        "index": 47
    },
    {
        "source": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "target": {
            "caption": "Privacy",
            "id": 11729,
            "label": "Privacy",
            "TrueLabel": "Privacy_148",
            "showCaption": "Privacy",
            "visible": false,
            "index": 25,
            "x": 890.1936153740919,
            "y": 285.05154359274394,
            "vy": -0.060655204059712274,
            "vx": 0.5270188021139666
        },
        "visible": false,
        "index": 48
    },
    {
        "source": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "target": {
            "caption": "High",
            "id": 11728,
            "label": "degree of influence",
            "TrueLabel": "degree_of_influence_148",
            "showCaption": "degree of influence",
            "visible": false,
            "index": 24,
            "x": 1092.0401188844253,
            "y": 181.4903470695571,
            "vy": -0.12706165889163737,
            "vx": 0.4453705332576704
        },
        "visible": false,
        "index": 49
    },
    {
        "source": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "target": {
            "caption": "Justice and fairness",
            "id": 11727,
            "label": "Justice and fairness",
            "TrueLabel": "Justice_and_fairness_148",
            "showCaption": "Justice and fairness",
            "visible": false,
            "index": 23,
            "x": 1004.5386911138089,
            "y": 136.81027675659092,
            "vy": 0.002176257398267034,
            "vx": 0.3059826463257585
        },
        "visible": false,
        "index": 50
    },
    {
        "source": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "target": {
            "caption": "Transparency",
            "id": 11726,
            "label": "Transparency",
            "TrueLabel": "Transparency_148",
            "showCaption": "Transparency",
            "visible": false,
            "index": 22,
            "x": 954.6191433073686,
            "y": 360.18085474994285,
            "vy": -0.03439311116017925,
            "vx": 0.5592580488770594
        },
        "visible": false,
        "index": 51
    },
    {
        "source": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "target": {
            "caption": "AI ethics issue resolution measures",
            "id": 11724,
            "label": "AI ethics issue resolution measures",
            "TrueLabel": "AI_ethics_issue_resolution_measures_148",
            "showCaption": "AI ethics issue resolution measures",
            "visible": false,
            "index": 20,
            "x": 770.2678133213426,
            "y": 201.5125263486689,
            "vy": 0.17494348882422917,
            "vx": 0.2650242664902796
        },
        "visible": false,
        "index": 52
    },
    {
        "source": {
            "caption": "Transparency",
            "id": 11726,
            "label": "Transparency",
            "TrueLabel": "Transparency_148",
            "showCaption": "Transparency",
            "visible": false,
            "index": 22,
            "x": 954.6191433073686,
            "y": 360.18085474994285,
            "vy": -0.03439311116017925,
            "vx": 0.5592580488770594
        },
        "target": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "visible": false,
        "index": 53
    },
    {
        "source": {
            "caption": "Justice and fairness",
            "id": 11727,
            "label": "Justice and fairness",
            "TrueLabel": "Justice_and_fairness_148",
            "showCaption": "Justice and fairness",
            "visible": false,
            "index": 23,
            "x": 1004.5386911138089,
            "y": 136.81027675659092,
            "vy": 0.002176257398267034,
            "vx": 0.3059826463257585
        },
        "target": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "visible": false,
        "index": 54
    },
    {
        "source": {
            "caption": "High",
            "id": 11728,
            "label": "degree of influence",
            "TrueLabel": "degree_of_influence_148",
            "showCaption": "degree of influence",
            "visible": false,
            "index": 24,
            "x": 1092.0401188844253,
            "y": 181.4903470695571,
            "vy": -0.12706165889163737,
            "vx": 0.4453705332576704
        },
        "target": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "visible": false,
        "index": 55
    },
    {
        "source": {
            "caption": "Privacy",
            "id": 11729,
            "label": "Privacy",
            "TrueLabel": "Privacy_148",
            "showCaption": "Privacy",
            "visible": false,
            "index": 25,
            "x": 890.1936153740919,
            "y": 285.05154359274394,
            "vy": -0.060655204059712274,
            "vx": 0.5270188021139666
        },
        "target": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "visible": false,
        "index": 56
    },
    {
        "source": {
            "caption": "Trust",
            "id": 11730,
            "label": "Trust",
            "TrueLabel": "Trust_148",
            "showCaption": "Trust",
            "visible": false,
            "index": 26,
            "x": 1052.5441031878738,
            "y": 357.07447449649885,
            "vy": -0.06571852207839579,
            "vx": 0.6362301032984331
        },
        "target": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "visible": false,
        "index": 57
    },
    {
        "source": {
            "caption": "Non-maleficence",
            "id": 11731,
            "label": "Non-maleficence",
            "TrueLabel": "Non-maleficence_148",
            "showCaption": "Non-maleficence",
            "visible": false,
            "index": 27,
            "x": 1113.8822790627014,
            "y": 278.09586148352065,
            "vy": -0.11517651686854277,
            "vx": 0.5725969956523719
        },
        "target": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "visible": false,
        "index": 58
    },
    {
        "source": {
            "caption": "Responsibility",
            "id": 11732,
            "label": "Responsibility",
            "TrueLabel": "Responsibility_148",
            "showCaption": "Responsibility",
            "visible": false,
            "index": 28,
            "x": 914.0396889463219,
            "y": 177.22070595047762,
            "vy": 0.20243629219778275,
            "vx": 0.3584846046794069
        },
        "target": {
            "caption": "AI ethics governance guidelines",
            "id": 11725,
            "label": "AI ethics governance guidelines",
            "TrueLabel": "AI_ethics_governance_guidelines_148",
            "showCaption": "AI ethics governance guidelines",
            "visible": false,
            "index": 21,
            "x": 1001.5429820202345,
            "y": 253.24775312436884,
            "vy": -0.01645885655532617,
            "vx": 0.5589032325978373
        },
        "visible": false,
        "index": 59
    },
    {
        "source": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "target": {
            "caption": "Economic loss",
            "id": 11739,
            "label": "Economic loss",
            "TrueLabel": "Economic_loss_148",
            "showCaption": "Economic loss",
            "visible": false,
            "index": 35,
            "x": 699.5531368237239,
            "y": 661.982366044943,
            "vy": 0.44054436910538725,
            "vx": -0.03547775158978328
        },
        "visible": false,
        "index": 60
    },
    {
        "source": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "target": {
            "caption": "Physical injury",
            "id": 11738,
            "label": "Physical injury",
            "TrueLabel": "Physical_injury_148",
            "showCaption": "Physical injury",
            "visible": false,
            "index": 34,
            "x": 817.0539955988858,
            "y": 449.8616714521234,
            "vy": 0.4976300992283489,
            "vx": 0.12064080048653536
        },
        "visible": false,
        "index": 61
    },
    {
        "source": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "target": {
            "caption": "Loss of opportunity",
            "id": 11737,
            "label": "Loss of opportunity",
            "TrueLabel": "Loss_of_opportunity_148",
            "showCaption": "Loss of opportunity",
            "visible": false,
            "index": 33,
            "x": 498.3059556236013,
            "y": 529.5819283294289,
            "vy": 0.23880880099665475,
            "vx": -0.07070844857530376
        },
        "visible": false,
        "index": 62
    },
    {
        "source": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "target": {
            "caption": "Emotional or psychological injury",
            "id": 11736,
            "label": "Emotional or psychological injury",
            "TrueLabel": "Emotional_or_psychological_injury_148",
            "showCaption": "Emotional or psychological injury",
            "visible": false,
            "index": 32,
            "x": 804.2921219231548,
            "y": 581.5256127285912,
            "vy": 0.5063712023110213,
            "vx": 0.03648786822983672
        },
        "visible": false,
        "index": 63
    },
    {
        "source": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "target": {
            "caption": "Social detriment",
            "id": 11735,
            "label": "Social detriment",
            "TrueLabel": "Social_detriment_148",
            "showCaption": "Social detriment",
            "visible": false,
            "index": 31,
            "x": 727.4196715426217,
            "y": 352.788914264728,
            "vy": 0.380761538583683,
            "vx": 0.2249384581424321
        },
        "visible": false,
        "index": 64
    },
    {
        "source": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "target": {
            "caption": "Infringements on human rights",
            "id": 11734,
            "label": "Infringements on human rights",
            "TrueLabel": "Infringements_on_human_rights_148",
            "showCaption": "Infringements on human rights",
            "visible": false,
            "index": 30,
            "x": 569.7934952988045,
            "y": 640.4525841645301,
            "vy": 0.3125946677088747,
            "vx": -0.07081426682072127
        },
        "visible": false,
        "index": 65
    },
    {
        "source": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "target": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11704,
            "label": "AI ethics issues",
            "TrueLabel": "AI_ethics_issues_148",
            "showCaption": "148",
            "visible": true,
            "index": 0,
            "x": 478.10642289584933,
            "y": 263.1644924843755,
            "vy": 0.19544733635425482,
            "vx": 0.2715761400130931
        },
        "visible": false,
        "index": 66
    },
    {
        "source": {
            "caption": "Infringements on human rights",
            "id": 11734,
            "label": "Infringements on human rights",
            "TrueLabel": "Infringements_on_human_rights_148",
            "showCaption": "Infringements on human rights",
            "visible": false,
            "index": 30,
            "x": 569.7934952988045,
            "y": 640.4525841645301,
            "vy": 0.3125946677088747,
            "vx": -0.07081426682072127
        },
        "target": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "visible": false,
        "index": 67
    },
    {
        "source": {
            "caption": "Social detriment",
            "id": 11735,
            "label": "Social detriment",
            "TrueLabel": "Social_detriment_148",
            "showCaption": "Social detriment",
            "visible": false,
            "index": 31,
            "x": 727.4196715426217,
            "y": 352.788914264728,
            "vy": 0.380761538583683,
            "vx": 0.2249384581424321
        },
        "target": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "visible": false,
        "index": 68
    },
    {
        "source": {
            "caption": "Emotional or psychological injury",
            "id": 11736,
            "label": "Emotional or psychological injury",
            "TrueLabel": "Emotional_or_psychological_injury_148",
            "showCaption": "Emotional or psychological injury",
            "visible": false,
            "index": 32,
            "x": 804.2921219231548,
            "y": 581.5256127285912,
            "vy": 0.5063712023110213,
            "vx": 0.03648786822983672
        },
        "target": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "visible": false,
        "index": 69
    },
    {
        "source": {
            "caption": "Loss of opportunity",
            "id": 11737,
            "label": "Loss of opportunity",
            "TrueLabel": "Loss_of_opportunity_148",
            "showCaption": "Loss of opportunity",
            "visible": false,
            "index": 33,
            "x": 498.3059556236013,
            "y": 529.5819283294289,
            "vy": 0.23880880099665475,
            "vx": -0.07070844857530376
        },
        "target": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "visible": false,
        "index": 70
    },
    {
        "source": {
            "caption": "Physical injury",
            "id": 11738,
            "label": "Physical injury",
            "TrueLabel": "Physical_injury_148",
            "showCaption": "Physical injury",
            "visible": false,
            "index": 34,
            "x": 817.0539955988858,
            "y": 449.8616714521234,
            "vy": 0.4976300992283489,
            "vx": 0.12064080048653536
        },
        "target": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "visible": false,
        "index": 71
    },
    {
        "source": {
            "caption": "Economic loss",
            "id": 11739,
            "label": "Economic loss",
            "TrueLabel": "Economic_loss_148",
            "showCaption": "Economic loss",
            "visible": false,
            "index": 35,
            "x": 699.5531368237239,
            "y": 661.982366044943,
            "vy": 0.44054436910538725,
            "vx": -0.03547775158978328
        },
        "target": {
            "caption": "AI-induced risks",
            "id": 11733,
            "label": "AI-induced risks",
            "TrueLabel": "AI-induced_risks_148",
            "showCaption": "AI-induced risks",
            "visible": false,
            "index": 29,
            "x": 657.3051198901601,
            "y": 499.5528845263147,
            "vy": 0.42944553068195385,
            "vx": 0.1205578382465424
        },
        "visible": false,
        "index": 72
    },
    {
        "source": {
            "caption": "Cases of AI ethics issues",
            "id": 11740,
            "label": "Cases of AI ethics issues",
            "TrueLabel": "Cases_of_AI_ethics_issues_148",
            "showCaption": "Cases of AI ethics issues",
            "visible": false,
            "index": 36,
            "x": 78.71122796818703,
            "y": 151.18040767298737,
            "vy": 0.48350697420244204,
            "vx": -0.2736901830916339
        },
        "target": {
            "caption": "Positional attribute",
            "id": 11759,
            "label": "Positional attribute",
            "TrueLabel": "Positional_attribute_148",
            "showCaption": "Positional attribute",
            "visible": false,
            "index": 55,
            "x": 267.0614001077443,
            "y": 100.16292454356912,
            "vy": 0.5698035630555738,
            "vx": -0.2466172564150519
        },
        "visible": false,
        "index": 73
    },
    {
        "source": {
            "caption": "Cases of AI ethics issues",
            "id": 11740,
            "label": "Cases of AI ethics issues",
            "TrueLabel": "Cases_of_AI_ethics_issues_148",
            "showCaption": "Cases of AI ethics issues",
            "visible": false,
            "index": 36,
            "x": 78.71122796818703,
            "y": 151.18040767298737,
            "vy": 0.48350697420244204,
            "vx": -0.2736901830916339
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 74
    },
    {
        "source": {
            "caption": "Cases of AI ethics issues",
            "id": 11740,
            "label": "Cases of AI ethics issues",
            "TrueLabel": "Cases_of_AI_ethics_issues_148",
            "showCaption": "Cases of AI ethics issues",
            "visible": false,
            "index": 36,
            "x": 78.71122796818703,
            "y": 151.18040767298737,
            "vy": 0.48350697420244204,
            "vx": -0.2736901830916339
        },
        "target": {
            "caption": "Event attributes",
            "id": 11741,
            "label": "Event attributes",
            "TrueLabel": "Event_attributes_148",
            "showCaption": "Event attributes",
            "visible": false,
            "index": 37,
            "x": 276.49901644393174,
            "y": 540.2988521307713,
            "vy": 0.8644450807509005,
            "vx": -0.3333145031980481
        },
        "visible": false,
        "index": 75
    },
    {
        "source": {
            "caption": "Cases of AI ethics issues",
            "id": 11740,
            "label": "Cases of AI ethics issues",
            "TrueLabel": "Cases_of_AI_ethics_issues_148",
            "showCaption": "Cases of AI ethics issues",
            "visible": false,
            "index": 36,
            "x": 78.71122796818703,
            "y": 151.18040767298737,
            "vy": 0.48350697420244204,
            "vx": -0.2736901830916339
        },
        "target": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11704,
            "label": "AI ethics issues",
            "TrueLabel": "AI_ethics_issues_148",
            "showCaption": "148",
            "visible": true,
            "index": 0,
            "x": 478.10642289584933,
            "y": 263.1644924843755,
            "vy": 0.19544733635425482,
            "vx": 0.2715761400130931
        },
        "visible": false,
        "index": 76
    },
    {
        "source": {
            "caption": "Event attributes",
            "id": 11741,
            "label": "Event attributes",
            "TrueLabel": "Event_attributes_148",
            "showCaption": "Event attributes",
            "visible": false,
            "index": 37,
            "x": 276.49901644393174,
            "y": 540.2988521307713,
            "vy": 0.8644450807509005,
            "vx": -0.3333145031980481
        },
        "target": {
            "caption": "05, 05, 2020",
            "id": 11744,
            "label": "Time",
            "TrueLabel": "Time_148",
            "showCaption": "Time",
            "visible": false,
            "index": 40,
            "x": 371.55963774678526,
            "y": 607.6867118735094,
            "vy": 0.726560722767236,
            "vx": -0.17100164319046687
        },
        "visible": false,
        "index": 77
    },
    {
        "source": {
            "caption": "Event attributes",
            "id": 11741,
            "label": "Event attributes",
            "TrueLabel": "Event_attributes_148",
            "showCaption": "Event attributes",
            "visible": false,
            "index": 37,
            "x": 276.49901644393174,
            "y": 540.2988521307713,
            "vy": 0.8644450807509005,
            "vx": -0.3333145031980481
        },
        "target": {
            "caption": "France",
            "id": 11743,
            "label": "Place",
            "TrueLabel": "Place_148",
            "showCaption": "Place",
            "visible": false,
            "index": 39,
            "x": 387.1211616412877,
            "y": 508.9050171114549,
            "vy": 0.708087550373614,
            "vx": -0.28780622472961603
        },
        "visible": false,
        "index": 78
    },
    {
        "source": {
            "caption": "Event attributes",
            "id": 11741,
            "label": "Event attributes",
            "TrueLabel": "Event_attributes_148",
            "showCaption": "Event attributes",
            "visible": false,
            "index": 37,
            "x": 276.49901644393174,
            "y": 540.2988521307713,
            "vy": 0.8644450807509005,
            "vx": -0.3333145031980481
        },
        "target": {
            "caption": {
                "low": 148,
                "high": 0
            },
            "id": 11742,
            "label": "Index",
            "TrueLabel": "Index_148",
            "showCaption": "Index",
            "visible": false,
            "index": 38,
            "x": 284.4239214759928,
            "y": 655.9924279153533,
            "vy": 0.892979302090679,
            "vx": -0.07988853664420542
        },
        "visible": false,
        "index": 79
    },
    {
        "source": {
            "caption": "Event attributes",
            "id": 11741,
            "label": "Event attributes",
            "TrueLabel": "Event_attributes_148",
            "showCaption": "Event attributes",
            "visible": false,
            "index": 37,
            "x": 276.49901644393174,
            "y": 540.2988521307713,
            "vy": 0.8644450807509005,
            "vx": -0.3333145031980481
        },
        "target": {
            "caption": "Cases of AI ethics issues",
            "id": 11740,
            "label": "Cases of AI ethics issues",
            "TrueLabel": "Cases_of_AI_ethics_issues_148",
            "showCaption": "Cases of AI ethics issues",
            "visible": false,
            "index": 36,
            "x": 78.71122796818703,
            "y": 151.18040767298737,
            "vy": 0.48350697420244204,
            "vx": -0.2736901830916339
        },
        "visible": false,
        "index": 80
    },
    {
        "source": {
            "caption": {
                "low": 148,
                "high": 0
            },
            "id": 11742,
            "label": "Index",
            "TrueLabel": "Index_148",
            "showCaption": "Index",
            "visible": false,
            "index": 38,
            "x": 284.4239214759928,
            "y": 655.9924279153533,
            "vy": 0.892979302090679,
            "vx": -0.07988853664420542
        },
        "target": {
            "caption": "Event attributes",
            "id": 11741,
            "label": "Event attributes",
            "TrueLabel": "Event_attributes_148",
            "showCaption": "Event attributes",
            "visible": false,
            "index": 37,
            "x": 276.49901644393174,
            "y": 540.2988521307713,
            "vy": 0.8644450807509005,
            "vx": -0.3333145031980481
        },
        "visible": false,
        "index": 81
    },
    {
        "source": {
            "caption": "France",
            "id": 11743,
            "label": "Place",
            "TrueLabel": "Place_148",
            "showCaption": "Place",
            "visible": false,
            "index": 39,
            "x": 387.1211616412877,
            "y": 508.9050171114549,
            "vy": 0.708087550373614,
            "vx": -0.28780622472961603
        },
        "target": {
            "caption": "Event attributes",
            "id": 11741,
            "label": "Event attributes",
            "TrueLabel": "Event_attributes_148",
            "showCaption": "Event attributes",
            "visible": false,
            "index": 37,
            "x": 276.49901644393174,
            "y": 540.2988521307713,
            "vy": 0.8644450807509005,
            "vx": -0.3333145031980481
        },
        "visible": false,
        "index": 82
    },
    {
        "source": {
            "caption": "05, 05, 2020",
            "id": 11744,
            "label": "Time",
            "TrueLabel": "Time_148",
            "showCaption": "Time",
            "visible": false,
            "index": 40,
            "x": 371.55963774678526,
            "y": 607.6867118735094,
            "vy": 0.726560722767236,
            "vx": -0.17100164319046687
        },
        "target": {
            "caption": "Event attributes",
            "id": 11741,
            "label": "Event attributes",
            "TrueLabel": "Event_attributes_148",
            "showCaption": "Event attributes",
            "visible": false,
            "index": 37,
            "x": 276.49901644393174,
            "y": 540.2988521307713,
            "vy": 0.8644450807509005,
            "vx": -0.3333145031980481
        },
        "visible": false,
        "index": 83
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "Clearview AI collects photographs from many websites, including social media. It collects all the photographs that are directly accessible on these networks (i.e. that can be viewed without logging in to an account). Images are also extracted from videos available online on all platforms. Thus, the company has collected over 20 billion images worldwide. Thanks to this collection, the company markets access to its image database in the form of a search engine in which a person can be searched using a photograph. The company offers this service to law enforcement authorities in order to identify perpetrators or victims of crime. Facial recognition technology is used to query the search engine and find a person based on their photograph. In order to do so, the company builds a \"biometric template\", i.e. a digital representation of a person's physical characteristics (the face in this case). These biometric data are particularly sensitive, especially because they are linked to our physical identity (what we are) and enable us to identify ourselves in a unique way. The vast majority of people whose images are collected into the search engine are unaware of this feature.",
            "id": 11758,
            "label": "Description",
            "TrueLabel": "Description_148",
            "showCaption": "Description",
            "visible": false,
            "index": 54,
            "x": -169.82874881431098,
            "y": 363.678558234676,
            "vy": 2.066577602382363,
            "vx": -0.23680268325410186
        },
        "visible": false,
        "index": 84
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "Negative",
            "id": 11757,
            "label": "Attitude",
            "TrueLabel": "Attitude_148",
            "showCaption": "Attitude",
            "visible": false,
            "index": 53,
            "x": -265.1483187855599,
            "y": 333.44892975839605,
            "vy": 1.5365637947009998,
            "vx": -0.07038215040914339
        },
        "visible": false,
        "index": 85
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "Positions in business conduct",
            "id": 11756,
            "label": "Positions in business conduct",
            "TrueLabel": "Positions_in_business_conduct_148",
            "showCaption": "Positions in business conduct",
            "visible": false,
            "index": 52,
            "x": -51.39883278307939,
            "y": 96.35983868304041,
            "vy": 1.0725613057413141,
            "vx": -0.7210847308930743
        },
        "visible": false,
        "index": 86
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "The cause of the problem",
            "id": 11755,
            "label": "The cause of the problem",
            "TrueLabel": "The_cause_of_the_problem_148",
            "showCaption": "The cause of the problem",
            "visible": false,
            "index": 51,
            "x": -124.27321145826913,
            "y": 164.83567623998147,
            "vy": 1.4909008365850818,
            "vx": -0.3304550276617396
        },
        "visible": false,
        "index": 87
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "Clearview AI",
            "id": 11754,
            "label": "Provider",
            "TrueLabel": "Provider_148",
            "showCaption": "Provider",
            "visible": false,
            "index": 50,
            "x": -236.31097381586204,
            "y": 40.251435558198814,
            "vy": 2.5005186360883207,
            "vx": -1.156808898054477
        },
        "visible": false,
        "index": 88
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "Face Recognition",
            "id": 11753,
            "label": "Fields",
            "TrueLabel": "Fields_148",
            "showCaption": "Fields",
            "visible": false,
            "index": 49,
            "x": -213.3023528327461,
            "y": 134.2292988726449,
            "vy": 2.6023344216424675,
            "vx": -0.8727451624244186
        },
        "visible": false,
        "index": 89
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "URL",
            "id": 11752,
            "label": "URL",
            "TrueLabel": "URL_148",
            "showCaption": "URL",
            "visible": false,
            "index": 48,
            "x": -281.1031871187568,
            "y": 201.38151792274635,
            "vy": 3.156414696042457,
            "vx": -0.5000945462713139
        },
        "visible": false,
        "index": 90
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "Response",
            "id": 11751,
            "label": "Response",
            "TrueLabel": "Response_148",
            "showCaption": "Response",
            "visible": false,
            "index": 47,
            "x": -375.2949605230988,
            "y": 181.4659987333948,
            "vy": 2.575247831948151,
            "vx": -0.6839586954457525
        },
        "visible": false,
        "index": 91
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "Clearview AI: No response Public: The company's privacy collection service is done without notice to the person. CNIL: The company's actions violated two laws and penalties were imposed on it.",
            "id": 11750,
            "label": "Opinion",
            "TrueLabel": "Opinion_148",
            "showCaption": "Opinion",
            "visible": false,
            "index": 46,
            "x": -341.34927127352205,
            "y": 277.7641395200532,
            "vy": 2.878474674285498,
            "vx": -1.583923094982643
        },
        "visible": false,
        "index": 92
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "The company did not obtain the consent of the persons concerned to collect and use their photographs to provide its software. clearview AI also did not have a legitimate interest in collecting and using this data, especially given the intrusive and large-scale nature of the process, which made it possible to retrieve the Internet images of millions of Internet users in France. On the other hand, the company did not respond effectively to access and deletion requests. It provided partial responses or did not respond to requests at all.",
            "id": 11749,
            "label": "Reason",
            "TrueLabel": "Reason_148",
            "showCaption": "Reason",
            "visible": false,
            "index": 45,
            "x": -90.16594863121652,
            "y": 307.4533875902942,
            "vy": 2.287227500965023,
            "vx": 0.07929890240809775
        },
        "visible": false,
        "index": 93
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "The vast majority of users have had their face data collected without their knowledge. The company provides search services to police departments in the form of a search engine.",
            "id": 11748,
            "label": "Results",
            "TrueLabel": "Results_148",
            "showCaption": "Results",
            "visible": false,
            "index": 44,
            "x": -311.40914583490036,
            "y": 103.9685351409385,
            "vy": 3.0320459705060494,
            "vx": -0.6779465267775667
        },
        "visible": false,
        "index": 94
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "CNIL",
            "id": 11747,
            "label": "Influencer",
            "TrueLabel": "Influencer_148",
            "showCaption": "Influencer",
            "visible": false,
            "index": 43,
            "x": -49.6933462165963,
            "y": 222.3917210478386,
            "vy": 1.8164151539806768,
            "vx": -0.32129123653280944
        },
        "visible": false,
        "index": 95
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11746,
            "label": "Case theme",
            "TrueLabel": "Case_theme_148",
            "showCaption": "Case theme",
            "visible": false,
            "index": 42,
            "x": -144.77144623351413,
            "y": 62.70984468135424,
            "vy": 1.9957787289548188,
            "vx": -1.1183602130431314
        },
        "visible": false,
        "index": 96
    },
    {
        "source": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "target": {
            "caption": "Cases of AI ethics issues",
            "id": 11740,
            "label": "Cases of AI ethics issues",
            "TrueLabel": "Cases_of_AI_ethics_issues_148",
            "showCaption": "Cases of AI ethics issues",
            "visible": false,
            "index": 36,
            "x": 78.71122796818703,
            "y": 151.18040767298737,
            "vy": 0.48350697420244204,
            "vx": -0.2736901830916339
        },
        "visible": false,
        "index": 97
    },
    {
        "source": {
            "caption": "Privacy and security issues due to face recognition",
            "id": 11746,
            "label": "Case theme",
            "TrueLabel": "Case_theme_148",
            "showCaption": "Case theme",
            "visible": false,
            "index": 42,
            "x": -144.77144623351413,
            "y": 62.70984468135424,
            "vy": 1.9957787289548188,
            "vx": -1.1183602130431314
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 98
    },
    {
        "source": {
            "caption": "CNIL",
            "id": 11747,
            "label": "Influencer",
            "TrueLabel": "Influencer_148",
            "showCaption": "Influencer",
            "visible": false,
            "index": 43,
            "x": -49.6933462165963,
            "y": 222.3917210478386,
            "vy": 1.8164151539806768,
            "vx": -0.32129123653280944
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 99
    },
    {
        "source": {
            "caption": "The vast majority of users have had their face data collected without their knowledge. The company provides search services to police departments in the form of a search engine.",
            "id": 11748,
            "label": "Results",
            "TrueLabel": "Results_148",
            "showCaption": "Results",
            "visible": false,
            "index": 44,
            "x": -311.40914583490036,
            "y": 103.9685351409385,
            "vy": 3.0320459705060494,
            "vx": -0.6779465267775667
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 100
    },
    {
        "source": {
            "caption": "The company did not obtain the consent of the persons concerned to collect and use their photographs to provide its software. clearview AI also did not have a legitimate interest in collecting and using this data, especially given the intrusive and large-scale nature of the process, which made it possible to retrieve the Internet images of millions of Internet users in France. On the other hand, the company did not respond effectively to access and deletion requests. It provided partial responses or did not respond to requests at all.",
            "id": 11749,
            "label": "Reason",
            "TrueLabel": "Reason_148",
            "showCaption": "Reason",
            "visible": false,
            "index": 45,
            "x": -90.16594863121652,
            "y": 307.4533875902942,
            "vy": 2.287227500965023,
            "vx": 0.07929890240809775
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 101
    },
    {
        "source": {
            "caption": "Clearview AI: No response Public: The company's privacy collection service is done without notice to the person. CNIL: The company's actions violated two laws and penalties were imposed on it.",
            "id": 11750,
            "label": "Opinion",
            "TrueLabel": "Opinion_148",
            "showCaption": "Opinion",
            "visible": false,
            "index": 46,
            "x": -341.34927127352205,
            "y": 277.7641395200532,
            "vy": 2.878474674285498,
            "vx": -1.583923094982643
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 102
    },
    {
        "source": {
            "caption": "Response",
            "id": 11751,
            "label": "Response",
            "TrueLabel": "Response_148",
            "showCaption": "Response",
            "visible": false,
            "index": 47,
            "x": -375.2949605230988,
            "y": 181.4659987333948,
            "vy": 2.575247831948151,
            "vx": -0.6839586954457525
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 103
    },
    {
        "source": {
            "caption": "URL",
            "id": 11752,
            "label": "URL",
            "TrueLabel": "URL_148",
            "showCaption": "URL",
            "visible": false,
            "index": 48,
            "x": -281.1031871187568,
            "y": 201.38151792274635,
            "vy": 3.156414696042457,
            "vx": -0.5000945462713139
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 104
    },
    {
        "source": {
            "caption": "Face Recognition",
            "id": 11753,
            "label": "Fields",
            "TrueLabel": "Fields_148",
            "showCaption": "Fields",
            "visible": false,
            "index": 49,
            "x": -213.3023528327461,
            "y": 134.2292988726449,
            "vy": 2.6023344216424675,
            "vx": -0.8727451624244186
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 105
    },
    {
        "source": {
            "caption": "Clearview AI",
            "id": 11754,
            "label": "Provider",
            "TrueLabel": "Provider_148",
            "showCaption": "Provider",
            "visible": false,
            "index": 50,
            "x": -236.31097381586204,
            "y": 40.251435558198814,
            "vy": 2.5005186360883207,
            "vx": -1.156808898054477
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 106
    },
    {
        "source": {
            "caption": "The cause of the problem",
            "id": 11755,
            "label": "The cause of the problem",
            "TrueLabel": "The_cause_of_the_problem_148",
            "showCaption": "The cause of the problem",
            "visible": false,
            "index": 51,
            "x": -124.27321145826913,
            "y": 164.83567623998147,
            "vy": 1.4909008365850818,
            "vx": -0.3304550276617396
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 107
    },
    {
        "source": {
            "caption": "Positions in business conduct",
            "id": 11756,
            "label": "Positions in business conduct",
            "TrueLabel": "Positions_in_business_conduct_148",
            "showCaption": "Positions in business conduct",
            "visible": false,
            "index": 52,
            "x": -51.39883278307939,
            "y": 96.35983868304041,
            "vy": 1.0725613057413141,
            "vx": -0.7210847308930743
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 108
    },
    {
        "source": {
            "caption": "Negative",
            "id": 11757,
            "label": "Attitude",
            "TrueLabel": "Attitude_148",
            "showCaption": "Attitude",
            "visible": false,
            "index": 53,
            "x": -265.1483187855599,
            "y": 333.44892975839605,
            "vy": 1.5365637947009998,
            "vx": -0.07038215040914339
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 109
    },
    {
        "source": {
            "caption": "Clearview AI collects photographs from many websites, including social media. It collects all the photographs that are directly accessible on these networks (i.e. that can be viewed without logging in to an account). Images are also extracted from videos available online on all platforms. Thus, the company has collected over 20 billion images worldwide. Thanks to this collection, the company markets access to its image database in the form of a search engine in which a person can be searched using a photograph. The company offers this service to law enforcement authorities in order to identify perpetrators or victims of crime. Facial recognition technology is used to query the search engine and find a person based on their photograph. In order to do so, the company builds a \"biometric template\", i.e. a digital representation of a person's physical characteristics (the face in this case). These biometric data are particularly sensitive, especially because they are linked to our physical identity (what we are) and enable us to identify ourselves in a unique way. The vast majority of people whose images are collected into the search engine are unaware of this feature.",
            "id": 11758,
            "label": "Description",
            "TrueLabel": "Description_148",
            "showCaption": "Description",
            "visible": false,
            "index": 54,
            "x": -169.82874881431098,
            "y": 363.678558234676,
            "vy": 2.066577602382363,
            "vx": -0.23680268325410186
        },
        "target": {
            "caption": "Relational attributes",
            "id": 11745,
            "label": "Relational attributes",
            "TrueLabel": "Relational_attributes_148",
            "showCaption": "Relational attributes",
            "visible": false,
            "index": 41,
            "x": -187.9964898547011,
            "y": 250.38070909776877,
            "vy": 2.0547039805096943,
            "vx": 0.3633641221875075
        },
        "visible": false,
        "index": 110
    },
    {
        "source": {
            "caption": "Positional attribute",
            "id": 11759,
            "label": "Positional attribute",
            "TrueLabel": "Positional_attribute_148",
            "showCaption": "Positional attribute",
            "visible": false,
            "index": 55,
            "x": 267.0614001077443,
            "y": 100.16292454356912,
            "vy": 0.5698035630555738,
            "vx": -0.2466172564150519
        },
        "target": {
            "caption": "Positional attributes in end stages",
            "id": 11768,
            "label": "Positional attributes in end stages",
            "TrueLabel": "Positional_attributes_in_end_stages_148",
            "showCaption": "Positional attributes in end stages",
            "visible": false,
            "index": 64,
            "x": 84.68414386523048,
            "y": 522.9856665333332,
            "vy": 0.1633864363802586,
            "vx": -0.6819987955946153
        },
        "visible": false,
        "index": 111
    },
    {
        "source": {
            "caption": "Positional attribute",
            "id": 11759,
            "label": "Positional attribute",
            "TrueLabel": "Positional_attribute_148",
            "showCaption": "Positional attribute",
            "visible": false,
            "index": 55,
            "x": 267.0614001077443,
            "y": 100.16292454356912,
            "vy": 0.5698035630555738,
            "vx": -0.2466172564150519
        },
        "target": {
            "caption": "Positional attributes in mid stages",
            "id": 11764,
            "label": "Positional attributes in mid stages",
            "TrueLabel": "Positional_attributes_in_mid_stages_148",
            "showCaption": "Positional attributes in mid stages",
            "visible": false,
            "index": 60,
            "x": 365.914955918887,
            "y": 41.78298606130271,
            "vy": 0.47563763093815886,
            "vx": -0.3592713842005052
        },
        "visible": false,
        "index": 112
    },
    {
        "source": {
            "caption": "Positional attribute",
            "id": 11759,
            "label": "Positional attribute",
            "TrueLabel": "Positional_attribute_148",
            "showCaption": "Positional attribute",
            "visible": false,
            "index": 55,
            "x": 267.0614001077443,
            "y": 100.16292454356912,
            "vy": 0.5698035630555738,
            "vx": -0.2466172564150519
        },
        "target": {
            "caption": "Positional attributes in early stages",
            "id": 11760,
            "label": "Positional attributes in early stages",
            "TrueLabel": "Positional_attributes_in_early_stages_148",
            "showCaption": "Positional attributes in early stages",
            "visible": false,
            "index": 56,
            "x": 199.89997335781675,
            "y": 463.95714513501497,
            "vy": 0.48725393749521434,
            "vx": -0.3316194239443236
        },
        "visible": false,
        "index": 113
    },
    {
        "source": {
            "caption": "Positional attribute",
            "id": 11759,
            "label": "Positional attribute",
            "TrueLabel": "Positional_attribute_148",
            "showCaption": "Positional attribute",
            "visible": false,
            "index": 55,
            "x": 267.0614001077443,
            "y": 100.16292454356912,
            "vy": 0.5698035630555738,
            "vx": -0.2466172564150519
        },
        "target": {
            "caption": "Cases of AI ethics issues",
            "id": 11740,
            "label": "Cases of AI ethics issues",
            "TrueLabel": "Cases_of_AI_ethics_issues_148",
            "showCaption": "Cases of AI ethics issues",
            "visible": false,
            "index": 36,
            "x": 78.71122796818703,
            "y": 151.18040767298737,
            "vy": 0.48350697420244204,
            "vx": -0.2736901830916339
        },
        "visible": false,
        "index": 114
    },
    {
        "source": {
            "caption": "Positional attributes in early stages",
            "id": 11760,
            "label": "Positional attributes in early stages",
            "TrueLabel": "Positional_attributes_in_early_stages_148",
            "showCaption": "Positional attributes in early stages",
            "visible": false,
            "index": 56,
            "x": 199.89997335781675,
            "y": 463.95714513501497,
            "vy": 0.48725393749521434,
            "vx": -0.3316194239443236
        },
        "target": {
            "caption": "Data modeling",
            "id": 11763,
            "label": "Data modeling",
            "TrueLabel": "Data_modeling_148",
            "showCaption": "Data modeling",
            "visible": false,
            "index": 59,
            "x": 201.69186872411282,
            "y": 617.2903174637398,
            "vy": 0.5914492112404929,
            "vx": -0.5582442330379193
        },
        "visible": false,
        "index": 115
    },
    {
        "source": {
            "caption": "Positional attributes in early stages",
            "id": 11760,
            "label": "Positional attributes in early stages",
            "TrueLabel": "Positional_attributes_in_early_stages_148",
            "showCaption": "Positional attributes in early stages",
            "visible": false,
            "index": 56,
            "x": 199.89997335781675,
            "y": 463.95714513501497,
            "vy": 0.48725393749521434,
            "vx": -0.3316194239443236
        },
        "target": {
            "caption": "Data access",
            "id": 11762,
            "label": "Data access",
            "TrueLabel": "Data_access_148",
            "showCaption": "Data access",
            "visible": false,
            "index": 58,
            "x": 113.6921039318958,
            "y": 438.9361842548131,
            "vy": -0.05645509011551786,
            "vx": -0.19765998050987058
        },
        "visible": false,
        "index": 116
    },
    {
        "source": {
            "caption": "Positional attributes in early stages",
            "id": 11760,
            "label": "Positional attributes in early stages",
            "TrueLabel": "Positional_attributes_in_early_stages_148",
            "showCaption": "Positional attributes in early stages",
            "visible": false,
            "index": 56,
            "x": 199.89997335781675,
            "y": 463.95714513501497,
            "vy": 0.48725393749521434,
            "vx": -0.3316194239443236
        },
        "target": {
            "caption": "Data acquisition",
            "id": 11761,
            "label": "Data acquisition",
            "TrueLabel": "Data_acquisition_148",
            "showCaption": "Data acquisition",
            "visible": false,
            "index": 57,
            "x": 170.00658078013225,
            "y": 544.2186424120083,
            "vy": 0.21513006261481182,
            "vx": -0.40495853961650374
        },
        "visible": false,
        "index": 117
    },
    {
        "source": {
            "caption": "Positional attributes in early stages",
            "id": 11760,
            "label": "Positional attributes in early stages",
            "TrueLabel": "Positional_attributes_in_early_stages_148",
            "showCaption": "Positional attributes in early stages",
            "visible": false,
            "index": 56,
            "x": 199.89997335781675,
            "y": 463.95714513501497,
            "vy": 0.48725393749521434,
            "vx": -0.3316194239443236
        },
        "target": {
            "caption": "Positional attribute",
            "id": 11759,
            "label": "Positional attribute",
            "TrueLabel": "Positional_attribute_148",
            "showCaption": "Positional attribute",
            "visible": false,
            "index": 55,
            "x": 267.0614001077443,
            "y": 100.16292454356912,
            "vy": 0.5698035630555738,
            "vx": -0.2466172564150519
        },
        "visible": false,
        "index": 118
    },
    {
        "source": {
            "caption": "Data acquisition",
            "id": 11761,
            "label": "Data acquisition",
            "TrueLabel": "Data_acquisition_148",
            "showCaption": "Data acquisition",
            "visible": false,
            "index": 57,
            "x": 170.00658078013225,
            "y": 544.2186424120083,
            "vy": 0.21513006261481182,
            "vx": -0.40495853961650374
        },
        "target": {
            "caption": "Positional attributes in early stages",
            "id": 11760,
            "label": "Positional attributes in early stages",
            "TrueLabel": "Positional_attributes_in_early_stages_148",
            "showCaption": "Positional attributes in early stages",
            "visible": false,
            "index": 56,
            "x": 199.89997335781675,
            "y": 463.95714513501497,
            "vy": 0.48725393749521434,
            "vx": -0.3316194239443236
        },
        "visible": false,
        "index": 119
    },
    {
        "source": {
            "caption": "Data access",
            "id": 11762,
            "label": "Data access",
            "TrueLabel": "Data_access_148",
            "showCaption": "Data access",
            "visible": false,
            "index": 58,
            "x": 113.6921039318958,
            "y": 438.9361842548131,
            "vy": -0.05645509011551786,
            "vx": -0.19765998050987058
        },
        "target": {
            "caption": "Positional attributes in early stages",
            "id": 11760,
            "label": "Positional attributes in early stages",
            "TrueLabel": "Positional_attributes_in_early_stages_148",
            "showCaption": "Positional attributes in early stages",
            "visible": false,
            "index": 56,
            "x": 199.89997335781675,
            "y": 463.95714513501497,
            "vy": 0.48725393749521434,
            "vx": -0.3316194239443236
        },
        "visible": false,
        "index": 120
    },
    {
        "source": {
            "caption": "Data modeling",
            "id": 11763,
            "label": "Data modeling",
            "TrueLabel": "Data_modeling_148",
            "showCaption": "Data modeling",
            "visible": false,
            "index": 59,
            "x": 201.69186872411282,
            "y": 617.2903174637398,
            "vy": 0.5914492112404929,
            "vx": -0.5582442330379193
        },
        "target": {
            "caption": "Positional attributes in early stages",
            "id": 11760,
            "label": "Positional attributes in early stages",
            "TrueLabel": "Positional_attributes_in_early_stages_148",
            "showCaption": "Positional attributes in early stages",
            "visible": false,
            "index": 56,
            "x": 199.89997335781675,
            "y": 463.95714513501497,
            "vy": 0.48725393749521434,
            "vx": -0.3316194239443236
        },
        "visible": false,
        "index": 121
    },
    {
        "source": {
            "caption": "Positional attributes in mid stages",
            "id": 11764,
            "label": "Positional attributes in mid stages",
            "TrueLabel": "Positional_attributes_in_mid_stages_148",
            "showCaption": "Positional attributes in mid stages",
            "visible": false,
            "index": 60,
            "x": 365.914955918887,
            "y": 41.78298606130271,
            "vy": 0.47563763093815886,
            "vx": -0.3592713842005052
        },
        "target": {
            "caption": "Behaviour nudging",
            "id": 11767,
            "label": "Behaviour nudging",
            "TrueLabel": "Behaviour_nudging_148",
            "showCaption": "Behaviour nudging",
            "visible": false,
            "index": 63,
            "x": 323.5472096156773,
            "y": -38.160284729277734,
            "vy": 0.439963442002773,
            "vx": -0.269768483189422
        },
        "visible": false,
        "index": 122
    },
    {
        "source": {
            "caption": "Positional attributes in mid stages",
            "id": 11764,
            "label": "Positional attributes in mid stages",
            "TrueLabel": "Positional_attributes_in_mid_stages_148",
            "showCaption": "Positional attributes in mid stages",
            "visible": false,
            "index": 60,
            "x": 365.914955918887,
            "y": 41.78298606130271,
            "vy": 0.47563763093815886,
            "vx": -0.3592713842005052
        },
        "target": {
            "caption": "Behavior prediction",
            "id": 11766,
            "label": "Behavior prediction",
            "TrueLabel": "Behavior_prediction_148",
            "showCaption": "Behavior prediction",
            "visible": false,
            "index": 62,
            "x": 403.4472134562599,
            "y": -42.156251360811595,
            "vy": 0.5739909839025253,
            "vx": -0.262937520400915
        },
        "visible": false,
        "index": 123
    },
    {
        "source": {
            "caption": "Positional attributes in mid stages",
            "id": 11764,
            "label": "Positional attributes in mid stages",
            "TrueLabel": "Positional_attributes_in_mid_stages_148",
            "showCaption": "Positional attributes in mid stages",
            "visible": false,
            "index": 60,
            "x": 365.914955918887,
            "y": 41.78298606130271,
            "vy": 0.47563763093815886,
            "vx": -0.3592713842005052
        },
        "target": {
            "caption": "Behavior tracking",
            "id": 11765,
            "label": "Behavior tracking",
            "TrueLabel": "Behavior_tracking_148",
            "showCaption": "Behavior tracking",
            "visible": false,
            "index": 61,
            "x": 453.6499892663889,
            "y": 19.704470309478623,
            "vy": 0.6599352951923407,
            "vx": -0.31997950297923844
        },
        "visible": false,
        "index": 124
    },
    {
        "source": {
            "caption": "Positional attributes in mid stages",
            "id": 11764,
            "label": "Positional attributes in mid stages",
            "TrueLabel": "Positional_attributes_in_mid_stages_148",
            "showCaption": "Positional attributes in mid stages",
            "visible": false,
            "index": 60,
            "x": 365.914955918887,
            "y": 41.78298606130271,
            "vy": 0.47563763093815886,
            "vx": -0.3592713842005052
        },
        "target": {
            "caption": "Positional attribute",
            "id": 11759,
            "label": "Positional attribute",
            "TrueLabel": "Positional_attribute_148",
            "showCaption": "Positional attribute",
            "visible": false,
            "index": 55,
            "x": 267.0614001077443,
            "y": 100.16292454356912,
            "vy": 0.5698035630555738,
            "vx": -0.2466172564150519
        },
        "visible": false,
        "index": 125
    },
    {
        "source": {
            "caption": "Behavior tracking",
            "id": 11765,
            "label": "Behavior tracking",
            "TrueLabel": "Behavior_tracking_148",
            "showCaption": "Behavior tracking",
            "visible": false,
            "index": 61,
            "x": 453.6499892663889,
            "y": 19.704470309478623,
            "vy": 0.6599352951923407,
            "vx": -0.31997950297923844
        },
        "target": {
            "caption": "Positional attributes in mid stages",
            "id": 11764,
            "label": "Positional attributes in mid stages",
            "TrueLabel": "Positional_attributes_in_mid_stages_148",
            "showCaption": "Positional attributes in mid stages",
            "visible": false,
            "index": 60,
            "x": 365.914955918887,
            "y": 41.78298606130271,
            "vy": 0.47563763093815886,
            "vx": -0.3592713842005052
        },
        "visible": false,
        "index": 126
    },
    {
        "source": {
            "caption": "Behavior prediction",
            "id": 11766,
            "label": "Behavior prediction",
            "TrueLabel": "Behavior_prediction_148",
            "showCaption": "Behavior prediction",
            "visible": false,
            "index": 62,
            "x": 403.4472134562599,
            "y": -42.156251360811595,
            "vy": 0.5739909839025253,
            "vx": -0.262937520400915
        },
        "target": {
            "caption": "Positional attributes in mid stages",
            "id": 11764,
            "label": "Positional attributes in mid stages",
            "TrueLabel": "Positional_attributes_in_mid_stages_148",
            "showCaption": "Positional attributes in mid stages",
            "visible": false,
            "index": 60,
            "x": 365.914955918887,
            "y": 41.78298606130271,
            "vy": 0.47563763093815886,
            "vx": -0.3592713842005052
        },
        "visible": false,
        "index": 127
    },
    {
        "source": {
            "caption": "Behaviour nudging",
            "id": 11767,
            "label": "Behaviour nudging",
            "TrueLabel": "Behaviour_nudging_148",
            "showCaption": "Behaviour nudging",
            "visible": false,
            "index": 63,
            "x": 323.5472096156773,
            "y": -38.160284729277734,
            "vy": 0.439963442002773,
            "vx": -0.269768483189422
        },
        "target": {
            "caption": "Positional attributes in mid stages",
            "id": 11764,
            "label": "Positional attributes in mid stages",
            "TrueLabel": "Positional_attributes_in_mid_stages_148",
            "showCaption": "Positional attributes in mid stages",
            "visible": false,
            "index": 60,
            "x": 365.914955918887,
            "y": 41.78298606130271,
            "vy": 0.47563763093815886,
            "vx": -0.3592713842005052
        },
        "visible": false,
        "index": 128
    },
    {
        "source": {
            "caption": "Positional attributes in end stages",
            "id": 11768,
            "label": "Positional attributes in end stages",
            "TrueLabel": "Positional_attributes_in_end_stages_148",
            "showCaption": "Positional attributes in end stages",
            "visible": false,
            "index": 64,
            "x": 84.68414386523048,
            "y": 522.9856665333332,
            "vy": 0.1633864363802586,
            "vx": -0.6819987955946153
        },
        "target": {
            "caption": "Surprising learning result",
            "id": 11771,
            "label": "Surprising learning result",
            "TrueLabel": "Surprising_learning_result_148",
            "showCaption": "Surprising learning result",
            "visible": false,
            "index": 67,
            "x": 39.031229944891734,
            "y": 603.3902873528899,
            "vy": 0.5480941689760231,
            "vx": -0.059372617008353945
        },
        "visible": false,
        "index": 129
    },
    {
        "source": {
            "caption": "Positional attributes in end stages",
            "id": 11768,
            "label": "Positional attributes in end stages",
            "TrueLabel": "Positional_attributes_in_end_stages_148",
            "showCaption": "Positional attributes in end stages",
            "visible": false,
            "index": 64,
            "x": 84.68414386523048,
            "y": 522.9856665333332,
            "vy": 0.1633864363802586,
            "vx": -0.6819987955946153
        },
        "target": {
            "caption": "Wrong user task",
            "id": 11770,
            "label": "Wrong user task",
            "TrueLabel": "Wrong_user_task_148",
            "showCaption": "Wrong user task",
            "visible": false,
            "index": 66,
            "x": 118.93060961191101,
            "y": 607.3572125390936,
            "vy": -0.049901958781236135,
            "vx": -0.027868613702029244
        },
        "visible": false,
        "index": 130
    },
    {
        "source": {
            "caption": "Positional attributes in end stages",
            "id": 11768,
            "label": "Positional attributes in end stages",
            "TrueLabel": "Positional_attributes_in_end_stages_148",
            "showCaption": "Positional attributes in end stages",
            "visible": false,
            "index": 64,
            "x": 84.68414386523048,
            "y": 522.9856665333332,
            "vy": 0.1633864363802586,
            "vx": -0.6819987955946153
        },
        "target": {
            "caption": "Wrong user group",
            "id": 11769,
            "label": "Wrong user group",
            "TrueLabel": "Wrong_user_group_148",
            "showCaption": "Wrong user group",
            "visible": false,
            "index": 65,
            "x": -5.185475980058844,
            "y": 538.2520221843872,
            "vy": 1.104769396161835,
            "vx": -0.5825557361802478
        },
        "visible": false,
        "index": 131
    },
    {
        "source": {
            "caption": "Positional attributes in end stages",
            "id": 11768,
            "label": "Positional attributes in end stages",
            "TrueLabel": "Positional_attributes_in_end_stages_148",
            "showCaption": "Positional attributes in end stages",
            "visible": false,
            "index": 64,
            "x": 84.68414386523048,
            "y": 522.9856665333332,
            "vy": 0.1633864363802586,
            "vx": -0.6819987955946153
        },
        "target": {
            "caption": "Positional attribute",
            "id": 11759,
            "label": "Positional attribute",
            "TrueLabel": "Positional_attribute_148",
            "showCaption": "Positional attribute",
            "visible": false,
            "index": 55,
            "x": 267.0614001077443,
            "y": 100.16292454356912,
            "vy": 0.5698035630555738,
            "vx": -0.2466172564150519
        },
        "visible": false,
        "index": 132
    },
    {
        "source": {
            "caption": "Wrong user group",
            "id": 11769,
            "label": "Wrong user group",
            "TrueLabel": "Wrong_user_group_148",
            "showCaption": "Wrong user group",
            "visible": false,
            "index": 65,
            "x": -5.185475980058844,
            "y": 538.2520221843872,
            "vy": 1.104769396161835,
            "vx": -0.5825557361802478
        },
        "target": {
            "caption": "Positional attributes in end stages",
            "id": 11768,
            "label": "Positional attributes in end stages",
            "TrueLabel": "Positional_attributes_in_end_stages_148",
            "showCaption": "Positional attributes in end stages",
            "visible": false,
            "index": 64,
            "x": 84.68414386523048,
            "y": 522.9856665333332,
            "vy": 0.1633864363802586,
            "vx": -0.6819987955946153
        },
        "visible": false,
        "index": 133
    },
    {
        "source": {
            "caption": "Wrong user task",
            "id": 11770,
            "label": "Wrong user task",
            "TrueLabel": "Wrong_user_task_148",
            "showCaption": "Wrong user task",
            "visible": false,
            "index": 66,
            "x": 118.93060961191101,
            "y": 607.3572125390936,
            "vy": -0.049901958781236135,
            "vx": -0.027868613702029244
        },
        "target": {
            "caption": "Positional attributes in end stages",
            "id": 11768,
            "label": "Positional attributes in end stages",
            "TrueLabel": "Positional_attributes_in_end_stages_148",
            "showCaption": "Positional attributes in end stages",
            "visible": false,
            "index": 64,
            "x": 84.68414386523048,
            "y": 522.9856665333332,
            "vy": 0.1633864363802586,
            "vx": -0.6819987955946153
        },
        "visible": false,
        "index": 134
    },
    {
        "source": {
            "caption": "Surprising learning result",
            "id": 11771,
            "label": "Surprising learning result",
            "TrueLabel": "Surprising_learning_result_148",
            "showCaption": "Surprising learning result",
            "visible": false,
            "index": 67,
            "x": 39.031229944891734,
            "y": 603.3902873528899,
            "vy": 0.5480941689760231,
            "vx": -0.059372617008353945
        },
        "target": {
            "caption": "Positional attributes in end stages",
            "id": 11768,
            "label": "Positional attributes in end stages",
            "TrueLabel": "Positional_attributes_in_end_stages_148",
            "showCaption": "Positional attributes in end stages",
            "visible": false,
            "index": 64,
            "x": 84.68414386523048,
            "y": 522.9856665333332,
            "vy": 0.1633864363802586,
            "vx": -0.6819987955946153
        },
        "visible": false,
        "index": 135
    }
]

var nodes_full_list=[]
nodes_full.forEach(node=>{
    nodes_full_list.push(node['label'])
})
function scaleNodesToFitContainer(nodes, containerWidth, containerHeight,margin = 10) {

    let minX = d3.min(nodes, d => d.x);
    let maxX = d3.max(nodes, d => d.x);
    let minY = d3.min(nodes, d => d.y);
    let maxY = d3.max(nodes, d => d.y);

    // 计算当前布局的宽度和高度
    let layoutWidth = maxX - minX;
    let layoutHeight = maxY - minY;

    // 计算缩放比例
    let scaleX = (containerWidth - margin * 2) / layoutWidth;
    let scaleY = (containerHeight - margin * 2) / layoutHeight;
    let scale = Math.min(scaleX, scaleY); // 选择一个较小的比例以保持等比例缩放

    // 调整每个节点的位置
    nodes.forEach(node => {
        node.x = (node.x - minX) * scale + margin; // 缩放并平移位置以适应容器，加上边距
        node.y = (node.y - minY) * scale + margin; // 缩放并平移位置以适应容器，加上边距
    });

    // 再次检查最小y值以确保没有节点超出上边界
    minY = d3.min(nodes, d => d.y);
    if (minY < 0) {
        let yOffset = Math.abs(minY);
        nodes.forEach(node => {
            node.y += yOffset; // 将所有节点向下移动以确保在边界内
        });
    }

    return nodes; // 返回调整后的节点位置
}
export function svg_span_draw(nodes,links,svg_span,dict_level_back,tooltip_left){
    const boolean_item=    [ 'Data_acquisition', 'Data_access', 'Data_modeling', 'Behavior_tracking', 'Behavior_prediction', 'Behaviour_nudging', 'Wrong_user_group', 'Wrong_user_task', 'Surprising_learning_result', 'Positive design that produces negative results that do not meet expectations', 'Negative design that produces negative results that meet expectations', 'Overly human-like and leading to ethics problems', 'Not human-like enough to cause ethics problems', 'Not enough beyond human to cause ethics problems', 'ethics issues caused by the wrong user group', 'ethics issues due to wrong user tasks', 'Infringements on human rights', 'Social detriment', 'Emotional or psychological injury', 'Loss of opportunity', 'Physical injury', 'Economic loss', 'Transparency', 'Justice and fairness', 'Privacy', 'Trust', 'Non-maleficence', 'Responsibility']

    var dict_level={
        "AI Designers": 5,
        "AI Products": 5,
        "AI ethics governance guidelines": 3,
        "AI ethics issue resolution measures": 2,
        "AI ethics issues": 1,
        "AI's service & work sessions": 4,
        "AI-induced risks": 2,
        "Attitude": 4,
        "Behavior prediction": 5,
        "Behavior tracking": 5,
        "Behaviour nudging": 5,
        "Case theme": 4,
        "Cases of AI ethics issues": 2,
        "Data access": 5,
        "Data acquisition": 5,
        "Data modeling": 5,
        "Description": 4,
        "Design session of Al": 4,
        "Economic loss": 3,
        "Emotional or psychological injury": 3,
        "Event attributes": 3,
        "Fields": 4,
        "Human-like ethics issues": 7,
        "Index": 4,
        "Influencer": 4,
        "Infringements on human rights": 3,
        "Justice and fairness": 4,
        "Life cycle of Al technology or product": 3,
        "Loss of opportunity": 3,
        "Negative design that produces negative results that meet expectations": 7,
        "Non-human-like ethics issues": 7,
        "Non-maleficence": 4,
        "Not enough beyond human to cause ethics problems": 8,
        "Not human-like enough to cause ethics problems": 8,
        "Opinion": 4,
        "Overly human-like and leading to ethics problems": 8,
        "Physical injury": 3,
        "Place": 4,
        "Positional attribute": 3,
        "Positional attributes in early stages": 4,
        "Positional attributes in end stages": 4,
        "Positional attributes in mid stages": 4,
        "Positions in business conduct": 4,
        "Positive design that produces negative results that do not meet expectations": 7,
        "Privacy": 4,
        "Provider": 4,
        "Reason": 4,
        "Relational attributes": 3,
        "Response": 4,
        "Responsibility": 4,
        "Results": 4,
        "Social detriment": 3,
        "Surprising learning result": 5,
        "The cause of the problem": 4,
        "Time": 4,
        "Time attributes of AI ethical issues": 2,
        "Transparency": 4,
        "Trust": 4,
        "URL": 4,
        "Users": 5,
        "Wrong user group": 5,
        "Wrong user task": 5,
        "degree of influence": 4,
        "ethics Issues Caused by Al Designers": 6,
        "ethics issues caused by Al products": 6,
        "ethics issues caused by Al users": 6,
        "ethics issues caused by the wrong user group": 7,
        "ethics issues due to wrong user tasks": 7
    }
    const nodes_list=[]
    tooltip_left.selectAll("*").remove();
    nodes.forEach(node=>{
        nodes_list.push(node['label'])
    })
    const missed_node_list=[]
    nodes_full_list.forEach(node=>{
        if (!nodes_list.includes(node)){
            dict_level[node]=100
            if (boolean_item.includes(node)){
                missed_node_list.push(node+" 0")
            }

        }
    })
    const container = document.getElementById('listContainer');
    container.innerHTML = ''; // Clear the container before adding new items

    missed_node_list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.textContent = item;
        container.appendChild(div);
    });
    var svg = svg_span;
    const width = +svg.attr("width");
    const height = +svg.attr("height");
    svg.selectAll("*").remove();

    console.log(links)
    console.log(nodes)
    // console.log(links)
    nodes_full.forEach(node => {
        node.visible = true;
        node.x=node_position_dict[node.label]['x']
        node.y=node_position_dict[node.label]['y']
    });
    links_full.forEach(link => {
        link.visible = true;
    });
    nodes_full=scaleNodesToFitContainer(nodes_full,300,200)


    var nodeMap = {};
    nodes_full.forEach(function(node) {
        nodeMap[node.id] = {'x':node.x,'y':node.y};
    });
    console.log(nodeMap)
    var link = svg.selectAll(".link")
        .data(links_full)
        .enter().append("line")
        .attr("class", "link")
        .attr("x1", function(d) { return nodeMap[d.source.id].x; })
        .attr("y1", function(d) { return nodeMap[d.source.id].y; })
        .attr("x2", function(d) { return nodeMap[d.target.id].x; })
        .attr("y2", function(d) { return nodeMap[d.target.id].y; })
        .style("stroke", "#aaa");


    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes_full)
        .enter().append("circle")
        .attr("r", function (d) {
            // console.log(nodes.find(node => node.id === d.id).label)
            return 1 / (dict_level[nodes_full.find(node => node.id === d.id).label]) * 7;
        })
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("class", "node")
        .attr("fill", d => getColorById(dict_level[nodes_full.find(node => node.id === d.id).label])) // 为每个节点根据level设置颜色




}