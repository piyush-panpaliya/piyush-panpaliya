export type Project = {
  name: string
  slug: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    name: 'Indian Institute of technology, Mandi',
    slug: 'university',
    description: 'B.Tech. in Electrical Engineering',
    link: 'https://www.iitmandi.ac.in/'
  },
  {
    name: 'Yeshwant mahavidyalay',
    slug: 'high-school',
    description: 'High School Diploma',
    link: 'https://www.yeshwantmahavidyalaya.com/'
  }
]