export type Info = {
  type: string
  name: string
  slug: 'high-school' | 'university'
  startDate: string
  endDate: string
  description: string
}

export const ed: Info[] = [
  {
    slug: 'university',
    type: 'University',
    name: 'Indian Institute of technology, Mandi',
    startDate: 'August 2023',
    endDate: 'current',
    description: 'B.Tech. in Electrical Engineering'
  },
  {
    slug: 'high-school',
    type: 'High School',
    name: 'Yeshwant mahavidyalay',
    startDate: 'March 2021',
    endDate: 'July 2023',
    description: 'High School Diploma'
  }
]