---
source: "Huppert's Notes: Pathophysiology and Clinical Pearls for Internal Medicine (2021)"
specialty: Appendix
chapter: "APP02"
title: "Biostatistics"
---

## 1. Clinical Trials

### 1.1 Types of Clinical Studies

**Case-control study** compares a group of patients with a disease ("cases") to a group of patients who do not have the disease ("controls"). This type of study looks backward in time (i.e., a retrospective study) to determine if there is a difference in exposure to a potential risk factor between cases and controls. It generates an odds ratio (OR). If an outcome is rare, the OR will be close to the risk ratio (RR), which is known as the **rare disease assumption**.

**Cohort study** compares a cohort of patients who were exposed to a potential risk factor with a cohort of patients who were not exposed. This may be prospective (follow the two cohorts and compare disease incidence) or retrospective (review records of disease incidence for each cohort).

**Cross-sectional study** is a "prevalence study" that provides a snapshot in time with both exposure and outcome measured simultaneously. It may establish association but not causation.

### 1.2 Clinical Trial Designs

| Design | Description |
| :--- | :--- |
| **Parallel design** | Randomizes one treatment to one group and a different treatment to another group (e.g., treatment vs. placebo) |
| **Factorial design** | Randomizes to different interventions with additional study of two or more variables (e.g., treatment vs. placebo, and in each group also studying one heart rate goal vs. another) |
| **Crossover design** | One group randomized to treatment A and another group randomized to treatment B, with the treatments reversed in the second half of the study |

### 1.3 Clinical Trial Phases

| Phase | Description |
| :--- | :--- |
| **Phase I** | A small number of healthy volunteer participants (or sometimes volunteer participants with the disease of interest, depending on the context) to determine the highest dose of the drug humans can take without serious side effects |
| **Phase II** | A new drug is given to a small number of volunteer participants with the disease of interest to determine the preliminary safety and efficacy of the new drug |
| **Phase III** | A new drug is given to a larger number of volunteer participants with the disease of interest. Participants are typically randomized to receive the new drug or treatment versus standard of care or a placebo. The US FDA typically requires a Phase III trial before approving a new medication |
| **Phase IV** | Postmarketing surveillance |

---

## 2. Biases

### 2.1 Recruitment Biases

**Selection bias** is a bias in selecting the study group. Subtypes include attrition bias (participants lost to follow-up), nonresponse bias (which can occur with surveys when the response rate is low), and other forms of selection bias.

### 2.2 Study Execution Biases

**Recall bias** refers to inaccurate recall of past events by patients and is common in case-control studies. **Observer bias** occurs when the observer may be influenced by prior knowledge or details of the study that affect the results, which can be mitigated by blinding. **Measurement bias** refers to poor data collection and inaccurate results.

### 2.3 Data and Result Interpretation Biases

**Confounding bias** occurs when at least part of the exposure-disease relationship can be explained by another variable. **Susceptibility bias** occurs when a treatment regimen is selected for a patient based on the severity of their condition without considering confounders. **Lead time bias** occurs when one intervention may diagnose a disease earlier than another intervention, but there is no change in mortality; however, the earlier detection makes it seem like the intervention prolongs survival. **Pygmalion effect** occurs when the researcher's expectation of an outcome influences the study and is well-established, particularly in psychological or education studies. **Hawthorne effect** refers to the impact on study participants of knowing that they are being monitored or "watched," meaning the knowledge of being studied affects compliance with a medication and other aspects of a study.

---

## 3. Odds Ratio, Risk Ratio, and Related Statistics

A 2×2 table compares the presence of disease versus a given exposure. The columns indicate whether the disease is present (+) or absent (−). The rows indicate whether the exposure is present (+) or absent (−). This table can be used to calculate the odds ratio, risk ratio, and attributable risk.

| Term | Formula | Description |
| :--- | :--- | :--- |
| **Odds ratio (OR)** | $OR = \frac{A/C}{B/D}$ | Ratio of the odds of an event in one group (e.g., exposed group) versus the odds of the event in another group (e.g., nonexposed group) |
| **Risk ratio (RR)** | $RR = \frac{A/(A+B)}{C/(C+D)}$ | Ratio of the risk of an event in one group (e.g., exposed group) versus the risk of the event in another group (e.g., nonexposed group) |
| **Attributable risk (AR)** | $AR = \text{Risk}_{\text{exposed}} - \text{Risk}_{\text{nonexposed}}$ | The difference between the risk of an outcome in one group and another group; the portion of an outcome attributable to an exposure |
| **Attributable risk percent** | $AR\% = \frac{RR - 1}{RR} \times 100$ | Attributable risk expressed as a percentage |
| **Number needed to harm (NNH)** | $NNH = \frac{1}{AR}$ | How many people need to be exposed to a medication or risk factor for one person to have a particular adverse effect |
| **Absolute risk reduction (ARR)** | $ARR = \%\text{risk}_{\text{placebo}} - \%\text{risk}_{\text{treatment}}$ | The difference between the risk of an outcome in a placebo group and a treatment group; the proportion of patients spared a particular adverse outcome as a result of a therapy |
| **Number needed to treat (NNT)** | $NNT = \frac{1}{ARR}$ | How many people need to be exposed to a medication or therapy for one person to have a particular beneficial impact |

---

## 4. Sensitivity, Specificity, Positive Predictive Value, and Negative Predictive Value

A 2×2 table compares the presence of disease versus the results of testing for the disease. The columns indicate whether the disease is present (+) or absent (−). The rows indicate whether the test result is positive (+) or negative (−). TP = true positive, FP = false positive, FN = false negative, TN = true negative.

| Test Characteristic | Formula | Description |
| :--- | :--- | :--- |
| **Sensitivity** | $\text{Sensitivity} = \frac{TP}{TP + FN}$ | The probability that when a disease is present, a diagnostic test will have a positive result. Highly sensitive tests are less likely to miss cases (i.e., unlikely to have false negative results). Therefore, ↑Sensitivity then ↑NPV |
| **Specificity** | $\text{Specificity} = \frac{TN}{TN + FP}$ | The probability that when a disease is absent, a diagnostic test will have a negative result. Highly specific tests are less likely to have false positive results. Therefore, ↓Specificity then ↓PPV |
| **Positive predictive value (PPV)** | $PPV = \frac{TP}{TP + FP}$ | The probability that a person who has a positive test result actually has the disease |
| **Negative predictive value (NPV)** | $NPV = \frac{TN}{TN + FN}$ | The probability that a person who has a negative test result does not have the disease |

If a disease is more prevalent, there is a higher PPV and lower NPV. **Sensitivity and specificity are not affected by disease prevalence.**

### Likelihood Ratios

| Term | Formula |
| :--- | :--- |
| **Positive likelihood ratio (+LR)** | $\frac{\text{Sensitivity}}{1 - \text{Specificity}}$ |
| **Negative likelihood ratio (−LR)** | $\frac{1 - \text{Sensitivity}}{\text{Specificity}}$ |

---

## 5. Prevalence vs. Incidence

**Prevalence** is the total cases in a population at a given time divided by the total population. Decreases in prevalence can result from more prevention or more treatment. Increases in prevalence occur if those living with the disease have a longer lifespan.

**Incidence** is new cases divided by the total population at risk. Only prevention (not treatment) decreases incidence, since the total population at risk excludes anyone who is already sick.

---

## 6. Precision vs. Accuracy

**Precision (reliability)** refers to whether a test generates similar results on repeat measurements. Tests that have less random error are more precise and reliable. However, a test can yield consistent results (i.e., be highly precise) but generate results that are inaccurate.

**Accuracy (validity)** refers to whether a test generates a result that is true or correct (imagine: hitting a bullseye).

---

## 7. Other Statistical Concepts and Formulas

**Standard deviation (SD):** For a normal distribution, **68%** of results fall within one SD, **95%** of results fall within two SDs, and **99%** of results fall within three SDs.

**Standard error of the sample mean (SEM):** $SEM = SD / \sqrt{n}$, where $n$ = sample size.

**p-values:** The probability that a result was achieved by chance. For example, p = 0.01 means there is a **1%** probability that the result occurred by chance.

**Confidence interval (CI):** $Mean \pm Z(SEM)$. When $Z = 1.96$, this calculates the **95%** CI. When comparing means, if the **95%** CI includes 0, there is no difference (assuming significance is a p-value < 0.05). When comparing OR or RR, if the **95%** CI includes 1, there is no difference.

### Comparing Groups

| Test | Purpose |
| :--- | :--- |
| **T-test** | Compares two means |
| **ANOVA** | Compares three or more means |
| **Chi-squared (χ²)** | Compares two or more proportions (for categorical variables) |

### Error Types and Power

| Term | Definition |
| :--- | :--- |
| **Type I error (α)** | Stating that there is an effect when none exists. False positive rate = $FP/(FP + TN)$ |
| **Type II error (β)** | Stating that there is not an effect when there really is one. False negative rate = $FN/(FN + TP)$ |
| **Power (1 − β)** | The probability of rejecting the null hypothesis when it is false |
