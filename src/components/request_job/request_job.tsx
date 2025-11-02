"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
    "text/plain",
];

const formSchema = z.object({
    jobFunction: z.string().min(1, { message: "Job Function is required" }),
    firstName: z.string()
        .trim()
        .min(1, { message: "First Name is required" })
        .max(100, { message: "First Name must be less than 100 characters" }),
    lastName: z.string()
        .trim()
        .min(1, { message: "Last Name is required" })
        .max(100, { message: "Last Name must be less than 100 characters" }),
    email: z.string()
        .trim()
        .email({ message: "Invalid email address" })
        .max(255, { message: "Email must be less than 255 characters" }),
    mobileNumber: z.string()
        .trim()
        .min(1, { message: "Mobile Number is required" })
        .regex(/^[0-9+\-\s()]+$/, { message: "Invalid mobile number format" }),
    nationality: z.string().min(1, { message: "Nationality is required" }),
    countryOfResidence: z.string().min(1, { message: "Country of Residence is required" }),
    degree: z.string().min(1, { message: "Your Degree is required" }),
    major: z.string().min(1, { message: "Your Major is required" }),
    graduationYear: z.string().optional(),
    experienceLevel: z.string().min(1, { message: "Level of Experience is required" }),
});

type FormValues = z.infer<typeof formSchema>;

export function TalentCommunityForm() {
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const t = useTranslations("jobs");
    const localActive = useLocale();

    const countries = [
        t("countries.usa"),
        t("countries.uk"),
        t("countries.canada"),
        t("countries.australia"),
        t("countries.germany"),
        t("countries.france"),
        t("countries.saudiArabia"),
        t("countries.uae"),
        t("countries.india"),
        t("countries.china"),
        t("countries.japan"),
        t("countries.brazil"),
        t("countries.mexico"),
        t("countries.southAfrica"),
        t("countries.other"),
    ];

    const degrees = [
        t("degrees.highSchool"),
        t("degrees.associate"),
        t("degrees.bachelor"),
        t("degrees.master"),
        t("degrees.phd"),
        t("degrees.professionalCert"),
    ];

    const majors = [
        t("majors.chemicalEngineering"),
        t("majors.mechanicalEngineering"),
        t("majors.electricalEngineering"),
        t("majors.civilEngineering"),
        t("majors.computerScience"),
        t("majors.businessAdmin"),
        t("majors.finance"),
        t("majors.marketing"),
        t("majors.humanResources"),
        t("majors.chemistry"),
        t("majors.other"),
    ];

    const experienceLevels = [
        t("experience.entry"),
        t("experience.mid"),
        t("experience.senior"),
        t("experience.executive"),
        t("experience.freshGraduate"),
    ];
    const generateYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= currentYear - 40; i--) {
            years.push(i.toString());
        }
        return years;
    };

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            jobFunction: "",
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            nationality: "",
            countryOfResidence: "",
            degree: "",
            major: "",
            graduationYear: "",
            experienceLevel: "",
        },
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const file = e.target.files?.[0];
        // if (file) {
        //   if (file.size > MAX_FILE_SIZE) {
        //     toast.error("The attached file exceeds the size limit. Please attach another file.");
        //     e.target.value = "";
        //     return;
        //   }
        //   if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        //     toast.error("Invalid file type. Please upload DOCX, PDF, Image, or Text files.");
        //     e.target.value = "";
        //     return;
        //   }
        //   setResumeFile(file);
        // }
    };

    async function onSubmit(values: FormValues) {
        // if (!resumeFile) {
        //   toast.error("A Resume is required.");
        //   return;
        // }

        setIsSubmitting(true);

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1500));

            //   console.log("Form submitted:", { ...values, resume: resumeFile.name });
            //   toast.success("Thank you. Your information has been submitted.");

            // Reset form
            form.reset();
            setResumeFile(null);
            const fileInput = document.getElementById("resume") as HTMLInputElement;
            if (fileInput) fileInput.value = "";
        } catch (error) {
            //   toast.error("There was an error submitting the form. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">
                                    {t('firstName')}<span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={t('firstName')} {...field} className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">
                                    {t('lastName')}<span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={t('lastName')} {...field} className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">
                                    {t('email')}<span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder={t('email')} {...field} className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="mobileNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">
                                    {t('mobileNumber')}<span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={t('mobileNumber')} {...field} className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="nationality"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">
                                    {t('nationality')} <span className="text-destructive">*</span>
                                </FormLabel>
                                <Select onValueChange={field.onChange} value={field.value} dir={`${localActive === 'ar' ? 'rtl' : 'ltr'}`}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white">
                                            <SelectValue placeholder={t('selectAnOption')} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-popover z-50">
                                        {countries.map((country) => (
                                            <SelectItem key={country} value={country}>
                                                {country}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="countryOfResidence"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">
                                    {t('countryOfResidence')} <span className="text-destructive">*</span>
                                </FormLabel>
                                <Select onValueChange={field.onChange} value={field.value} dir={`${localActive === 'ar' ? 'rtl' : 'ltr'}`}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white">
                                            <SelectValue placeholder={t('selectAnOption')} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-popover z-50">
                                        {countries.map((country) => (
                                            <SelectItem key={country} value={country}>
                                                {country}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="degree"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">
                                    {t('degree')} <span className="text-destructive">*</span>
                                </FormLabel>
                                <Select onValueChange={field.onChange} value={field.value} dir={`${localActive === 'ar' ? 'rtl' : 'ltr'}`}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white">
                                            <SelectValue placeholder={t('selectAnOption')} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-popover z-50">
                                        {degrees.map((degree) => (
                                            <SelectItem key={degree} value={degree}>
                                                {degree}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="major"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">
                                    {t('major')} <span className="text-destructive">*</span>
                                </FormLabel>
                                <Select onValueChange={field.onChange} value={field.value} dir={`${localActive === 'ar' ? 'rtl' : 'ltr'}`}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white">
                                            <SelectValue placeholder={t('selectAnOption')} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-popover z-50">
                                        {majors.map((major) => (
                                            <SelectItem key={major} value={major}>
                                                {major}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="graduationYear"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">{t('graduationYear')}</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value} dir={`${localActive === 'ar' ? 'rtl' : 'ltr'}`}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white">
                                            <SelectValue placeholder={t('selectAnOption')} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-popover z-50 max-h-[300px]">
                                        {generateYears().map((year) => (
                                            <SelectItem key={year} value={year}>
                                                {year}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="experienceLevel"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground">
                                    {t('experienceLevel')} <span className="text-destructive">*</span>
                                </FormLabel>
                                <Select onValueChange={field.onChange} value={field.value} dir={`${localActive === 'ar' ? 'rtl' : 'ltr'}`}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background border border-primary h-12 rounded-xl hover:border-accent text-white">
                                            <SelectValue placeholder={t('selectAnOption')} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-popover z-50">
                                        {experienceLevels.map((level) => (
                                            <SelectItem key={level} value={level}>
                                                {level}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <FormLabel className="text-foreground">
                        {t('resume')} <span className="text-destructive">*</span>
                    </FormLabel>
                    <Input
                        id="resume"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                        className="bg-background cursor-pointer border border-primary h-12 rounded-xl hover:border-accent text-white"
                    />
                    <p className="text-sm text-white">
                        {t('acceptableFiles')}
                    </p>
                    {resumeFile && (
                        <p className="text-sm text-accent">
                            {t('selectedFile')} {resumeFile.name}
                        </p>
                    )}
                </div>

                <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 border border-primary h-12 rounded-xl hover:border-accent text-xl"
                    disabled={isSubmitting}
                >
                     {isSubmitting ? t('submitting') : t('submitApplication')}
                </Button>
            </form>
        </Form>
    );
}
