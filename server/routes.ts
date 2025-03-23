import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // GET route for server health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Rifqi Alviandi Portfolio API is running' });
  });

  // For contact form - this route would handle form submissions in a real app
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate inputs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }
    
    // In a real app, you would save this to a database or send an email
    // For now, just return success
    res.json({ 
      success: true, 
      message: 'Message received successfully' 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
