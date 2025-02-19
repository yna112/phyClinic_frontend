export class PatientFormModel {
    public id?: number;
    public firstName?: string;
    public lastName?: string;
    public city?: string;
    public address?: string;
    public phoneNumber?: string;
    public mail?: string;
    public gender?: string;
    public weight?: number;
    public height?: number;
    public occupation?: string;               // עיסוק / תפקיד
    public hasInsurance?: string;            // האם יש לך ביטוח?
    public insuranceCompanyName?: string;     // שם חברת הביטוח
    public insuranceExpiryDate?: Date;      // תאריך תפוגת הביטוח (בפורמט dd/mm/yyyy)
    public insuranceCoverageType?: string;     // סוג הכיסוי
    public isPhysicallyActive?: string;        // האם אתה עוסק בפעילות גופנית?
    public reasonForPhysiotherapy?: string;     // מדוע אתה פונה לפיזיותרפיה?
    public mainComplaint?: string;              // תלונה עיקרית
    public secondaryComplaint?: string;         // תלונה משנית
    public painDuration?: string;               // כמה זמן אתה חווה כאב?
    public isPregnant?: string;                // האם את בהריון?
    public pregnancyWeek?: number;                 // שבוע בהריון
    public isBreastfeeding?: string;           // האם את מניקה?
    public painLevel?: number;

    public constructor(
        id?: number,
        firstName?: string,
        lastName?: string,
        city?: string,
        address?: string,
        phoneNumber?: string,
        mail?: string,
        gender?: string,
        weight?: number,
        height?: number,
        occupation?: string,
        hasInsurance?: string,
        insuranceCompanyName?: string,
        insuranceExpiryDate?: Date,
        insuranceCoverageType?: string,
        isPhysicallyActive?: string,
        reasonForPhysiotherapy?: string,
        mainComplaint?: string,
        secondaryComplaint?: string,
        painDuration?: string,
        isPregnant?: string,
        pregnancyWeek?: number,
        isBreastfeeding?: string,
        painLevel?: number
 ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.mail = mail;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.occupation = occupation;
        this.hasInsurance = hasInsurance;
        this.insuranceCompanyName = insuranceCompanyName;
        this.insuranceExpiryDate = insuranceExpiryDate;
        this.insuranceCoverageType = insuranceCoverageType;
        this.isPhysicallyActive = isPhysicallyActive;
        this.reasonForPhysiotherapy = reasonForPhysiotherapy;
        this.mainComplaint = mainComplaint;
        this.secondaryComplaint = secondaryComplaint;
        this.painDuration = painDuration;
        this.isPregnant = isPregnant;
        this.pregnancyWeek = pregnancyWeek;
        this.isBreastfeeding = isBreastfeeding;
        this.painLevel = painLevel;
    }
}
