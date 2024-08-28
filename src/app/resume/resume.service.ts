import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resume } from './resume.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private resumeUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.useMocks ? '' : environment.apiUrl;
    this.resumeUrl = "";
  }

  getResume(): Observable<Resume[]> {
    return this.http.get<Resume[]>(this.baseUrl + this.resumeUrl);
  }

  // Jika Anda ingin menambahkan metode untuk mendapatkan resume berdasarkan ID
  getResumeById(id: string): Observable<Resume> {
    return this.http.get<Resume>(`${this.baseUrl}${this.resumeUrl}/${id}`);
  }

  // Metode tambahan untuk menambah, memperbarui, atau menghapus resume jika diperlukan
  addResume(resume: Resume): Observable<Resume> {
    return this.http.post<Resume>(this.baseUrl + this.resumeUrl, resume);
  }

  updateResume(resume: Resume): Observable<Resume> {
    return this.http.put<Resume>(`${this.baseUrl}${this.resumeUrl}/${resume.id}`, resume);
  }

  deleteResume(id: string): Observable<{}> {
    return this.http.delete(`${this.baseUrl}${this.resumeUrl}/${id}`);
  }
}
