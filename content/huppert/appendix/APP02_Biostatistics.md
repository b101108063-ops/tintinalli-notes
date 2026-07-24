---
source: "Huppert's Notes: Pathophysiology and Clinical Pearls for Internal Medicine (2021)"
specialty: Appendix
chapter: "APP02"
title: "Biostatistics"
---

# Biostatistics

## Clinical Trials

### Types of Clinical Studies & Trials

#### Case Control Study

- Compares a group of patients with a disease ("cases") to a group of patients who do not have the disease ("controls").
- Looks backward in time (i.e., a retrospective study) to determine if there is a difference in exposure to a potential risk factor between cases and controls.
- Generates an odds ratio (OR).
- If an outcome is rare, the OR will be close to the risk ratio (RR) ("the rare disease assumption").

#### Cohort Study

- Compares a cohort of patients who were exposed to a potential risk factor with a cohort of patients who were not exposed.
- May be prospective (follow the two cohorts and compare disease incidence) or retrospective (review records of disease incidence for each cohort).

#### Cross-Sectional Study

- "Prevalence study": A snapshot in time with both exposure and outcome measured simultaneously; may establish association but not causation.

#### Clinical Trial Types

**Sample and control group:**

| Design | Description |
|--------|-------------|
| **Parallel design** | Randomizes one treatment to one group and a different treatment to another group (e.g., treatment vs. placebo) |
| **Factorial design** | Randomizes to different interventions with additional study of two or more variables (e.g., treatment vs. placebo, and in each group also studying one heart rate goal vs. another) |
| **Crossover design** | One group randomized to treatment A and another group randomized to treatment B; the treatment received are reversed in the second half of the study |

#### Clinical Trial Phases

| Phase | Description |
|-------|-------------|
| **Phase I** | A small number of healthy volunteer participants (or sometimes volunteer participants with the disease of interest, depending on the context), aiming to determine the highest dose of the drug humans can take without serious side effects |
| **Phase II** | A new drug is given to a small number of volunteer participants with the disease of interest, aiming to determine the preliminary safety and efficacy of the new drug |
| **Phase III** | A new drug is given to a larger number of volunteer participants with the disease of interest. Participants are typically randomized to receive the new drug/treatment vs. the standard of care or a placebo. The US FDA typically requires a phase III trial before approving a new medication |
| **Phase IV** | Postmarketing surveillance |

### Biases

#### Recruitment Biases

| Type | Description |
|------|-------------|
| **Selection bias** | Bias in selecting the study group |
| **Attrition bias** | Participants lost to follow-up |
| **Nonresponse bias** | Can occur with surveys when low response rate |

#### Study Execution Biases

| Type | Description |
|------|-------------|
| **Recall bias** | Inaccurate recall of past events by patients; common in case-control studies |
| **Observer bias** | Observer may be influenced by prior knowledge or details of the study that affect the results; mitigated by blinding |
| **Measurement bias** | Poor data collection, inaccurate results |

#### Data/Result Interpretation Biases

| Type | Description |
|------|-------------|
| **Confounding bias** | At least part of the exposure-disease relationship can be explained by another variable |
| **Susceptibility bias** | Treatment regimen is selected for a patient based on the severity of their condition without considering confounders |
| **Lead time bias** | One intervention may diagnose a disease earlier than another intervention, but there is no change in mortality; however, the earlier detection makes it seem like the intervention prolongs survival |
| **Pygmalion effect** | The researcher's expectation of an outcome influences the study; well-established, particularly in psychological or education studies |
| **Hawthorne effect** | The impact on study participants of knowing that they are being monitored or "watched" — the knowledge of being studied affects compliance to a medication and other aspects of a study |

---

## Statistical Concepts and Test Characteristics

### Odds Ratio, Risk Ratio, and Related Statistics

A 2 × 2 table compares the presence of disease vs. a given exposure (e.g., disease = lung cancer, exposure = smoking).

- The columns indicate whether the disease is present (+) or absent (−).
- The rows indicate whether the exposure is present (+) or absent (−).

**Common Biostatistics Terms and Formulas:**

| Term | Formula | Description |
|------|---------|-------------|
| **Odds ratio (OR)** | — | Ratio of odds of an event in one group (e.g., exposed group) versus the odds of the event in the other group (e.g., non-exposed group) |
| **Risk ratio (RR)** | — | Ratio of risk of an event in one group (e.g., exposed group) versus the risk of the event in the other group (e.g., non-exposed group) |
| **Attributable risk (AR)** | — | The difference between the risk of an outcome in one group (e.g., exposed group) and another group (e.g., non-exposed group); the portion of an outcome (e.g., disease) attributable to an exposure |
| **Attributable risk percent** | — | Attributable risk, expressed as a percentage |
| **Number needed to harm (NNH)** | — | How many people need to be exposed to a medication or risk factor in order for one person to have a particular adverse effect |
| **Absolute risk reduction (ARR)** | %risk placebo − %risk treatment | The difference between the risk of an outcome in a placebo group and a treatment group; the proportion of patients who are spared a particular adverse outcome as a result of a therapy |
| **Number needed to treat (NNT)** | — | How many people need to be exposed to a medication or therapy in order to have a particular beneficial impact on one person |

### Sensitivity, Specificity, Positive Predictive Value, and Negative Predictive Value

A 2 × 2 table compares the presence of disease vs. the results of testing for the disease (e.g., disease = prostate cancer, test = PSA).

- The columns indicate whether the disease is present (+) or absent (−).
- The rows indicate whether the test result is positive (+) or negative (−).
- TP = True positive, FP = False positive, FN = False negative, TN = True negative.

| Test Characteristic | Formula | Description |
|-------------------|---------|-------------|
| **Sensitivity** | TP/(TP+FN) | The probability that when a disease is present, a diagnostic test will have a positive result. In other words, what proportion of all positive patients (i.e., TP + FN) will have a positive result? Highly sensitive tests are less likely to miss cases (i.e., unlikely to have false negative results). Therefore, ↑Sensitivity → ↑NPV |
| **Specificity** | TN/(TN+FP) | The probability that when a disease is absent, a diagnostic test will have a negative result. In other words, what proportion of all negative patients (i.e., TN + FP) will have a negative result? Highly specific tests are less likely to have false positive results. Therefore, ↓Specificity → ↓PPV |
| **Positive predictive value (PPV)** | TP/(TP+FP) | The probability that a person who has a positive test result actually has a disease. In other words, what proportion of positive results are true positives? |
| **Negative predictive value (NPV)** | TN/(TN+FN) | The probability that a person who has a negative test result actually does not have a disease. In other words, what proportion of negative results are true negatives? |

**Important:** If a disease is more prevalent, there is a higher PPV and lower NPV. Sensitivity and specificity are not affected by disease prevalence.

### Likelihood Ratios

| Ratio | Formula |
|-------|--------|
| **Positive likelihood ratio (+LR)** | Sensitivity / (1 − Specificity) |
| **Negative likelihood ratio (−LR)** | (1 − Sensitivity) / Specificity |

### Prevalence vs. Incidence

| Term | Definition |
|------|----------|
| **Prevalence** | Total cases in a population at a given time / total population. ↓Prevalence can be due to more prevention or more treatment; ↑Prevalence if those living with the disease have a longer lifespan |
| **Incidence** | New cases / total in population at risk. Only prevention (not treatment) decreases incidence, since the total population at risk excludes anyone who is already sick |

### Precision vs. Accuracy

| Term | Definition |
|------|----------|
| **Precision/reliability** | Does a test generate similar results on repeat measurements? Tests that have less random error are more precise/reliable. However, a test can yield consistent results (i.e., be highly precise), but generate results that are inaccurate |
| **Accuracy/validity** | Does a test generate a result that is true or right (imagine: hitting a bullseye)? |

---

## Other Statistical Concepts and Formulas

| Concept | Description |
|---------|-------------|
| **Standard deviation (SD)** | For normal distribution, 68% of results within one SD, 95% of results within two SDs, 99% of results within three SDs |
| **Standard error of the sample mean (SEM)** | SD/√n, where n = sample size |
| **p-values** | Probability that result achieved by chance, e.g., p = 0.01 means 1% probability that the result occurred by chance |
| **Confidence interval (CI)** | Mean ± Z(SEM); when Z = 1.96, calculates 95% CI. When comparing means, if the 95% CI includes 0, then there is no difference (assuming significance is a p-value <0.05). When comparing OR or RR, if the 95% CI includes 1, then there is no difference |

### Comparing Groups

| Test | Use |
|------|-----|
| **T-test** | Compares two means |
| **ANOVA** | Compares three or more means |
| **Chi-squared (χ²)** | Compares two or more proportions (categorical variables) |

### Error Types

| Error Type | Definition | False Positive Rate |
|-----------|------------|-------------------|
| **Type I error (α)** | Stating that there is an effect when none exists (α <0.05) | FP/(FP+TN) |
| **Type II error (β)** | Stating that there is not an effect when there really is one | FN/(FN+TP) |
| **Power (1−β)** | Probability of rejecting the null when it is false | — |
