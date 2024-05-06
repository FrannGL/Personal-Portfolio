import axios from "axios";
const API = `${process.env.NEXT_PUBLIC_API_URL}/api`
export async function POST(url: string, formData: any): Promise <any>{
  try {
      const res = await axios.post(`${API}/${url}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
      });
      return res.data;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
};