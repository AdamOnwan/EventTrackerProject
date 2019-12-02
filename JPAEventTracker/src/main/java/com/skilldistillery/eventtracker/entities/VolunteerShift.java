package com.skilldistillery.eventtracker.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "volunteer_shift")
public class VolunteerShift {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="volunteer_job")
	private String volunteerJob;
	@Column(name="start_datetime")
	private Date startDatetime;
	private String duration;
	@Column(name="desired_number_of_volunteers")
	private String desiredNumVolunteers;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getVolJob() {
		return volunteerJob;
	}
	public void setVolJob(String volJob) {
		this.volunteerJob = volJob;
	}
	public Date getStartDatetime() {
		return startDatetime;
	}
	public void setStartDatetime(Date startDatetime) {
		this.startDatetime = startDatetime;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getDesiredNumVolunteers() {
		return desiredNumVolunteers;
	}
	public void setDesiredNumVolunteers(String desiredNumVolunteers) {
		this.desiredNumVolunteers = desiredNumVolunteers;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((desiredNumVolunteers == null) ? 0 : desiredNumVolunteers.hashCode());
		result = prime * result + ((duration == null) ? 0 : duration.hashCode());
		result = prime * result + id;
		result = prime * result + ((startDatetime == null) ? 0 : startDatetime.hashCode());
		result = prime * result + ((volunteerJob == null) ? 0 : volunteerJob.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		VolunteerShift other = (VolunteerShift) obj;
		if (desiredNumVolunteers == null) {
			if (other.desiredNumVolunteers != null)
				return false;
		} else if (!desiredNumVolunteers.equals(other.desiredNumVolunteers))
			return false;
		if (duration == null) {
			if (other.duration != null)
				return false;
		} else if (!duration.equals(other.duration))
			return false;
		if (id != other.id)
			return false;
		if (startDatetime == null) {
			if (other.startDatetime != null)
				return false;
		} else if (!startDatetime.equals(other.startDatetime))
			return false;
		if (volunteerJob == null) {
			if (other.volunteerJob != null)
				return false;
		} else if (!volunteerJob.equals(other.volunteerJob))
			return false;
		return true;
	}
	public VolunteerShift(int id, String volJob, Date startDatetime, String duration, String desiredNumVolunteers) {
		super();
		this.id = id;
		this.volunteerJob = volJob;
		this.startDatetime = startDatetime;
		this.duration = duration;
		this.desiredNumVolunteers = desiredNumVolunteers;
	}
	public VolunteerShift() {
		super();
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("VolunteerShift [id=");
		builder.append(id);
		builder.append(", volJob=");
		builder.append(volunteerJob);
		builder.append(", startDatetime=");
		builder.append(startDatetime);
		builder.append(", duration=");
		builder.append(duration);
		builder.append(", desiredNumVolunteers=");
		builder.append(desiredNumVolunteers);
		builder.append("]");
		return builder.toString();
	}
	
	}
